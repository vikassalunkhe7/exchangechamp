(function() {
    'use strict';

    const ABI = [{"inputs":[{"name":"_token","type":"address"},{"name":"_currency","type":"address"},{"name":"_supply","type":"uint256"},{"name":"_softcap","type":"uint256"},{"name":"_maxDeposit","type":"uint256"},{"name":"_start","type":"uint40"},{"name":"_duration_hours","type":"uint40"}],"stateMutability":"Nonpayable","type":"Constructor"},{"inputs":[{"indexed":true,"name":"member","type":"address"},{"indexed":true,"name":"from","type":"address"},{"name":"amount","type":"uint256"}],"name":"Bonus","type":"Event"},{"inputs":[{"indexed":true,"name":"member","type":"address"},{"name":"amount","type":"uint256"}],"name":"Deposit","type":"Event"},{"inputs":[{"indexed":true,"name":"member","type":"address"},{"name":"amount","type":"uint256"}],"name":"Refund","type":"Event"},{"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":true,"name":"upline","type":"address"}],"name":"Upline","type":"Event"},{"inputs":[{"indexed":true,"name":"member","type":"address"},{"name":"amount","type":"uint256"}],"name":"Withdraw","type":"Event"},{"outputs":[{"name":"tokens","type":"uint256"},{"name":"bonus","type":"uint256"},{"name":"refund","type":"uint256"}],"constant":true,"inputs":[{"name":"member","type":"address"}],"name":"available","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"currency","stateMutability":"View","type":"Function"},{"inputs":[{"name":"amount","type":"uint256"},{"name":"upline","type":"address"}],"name":"deposit","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint40"}],"constant":true,"name":"duration","stateMutability":"View","type":"Function"},{"outputs":[{"name":"tokens","type":"uint256"},{"name":"bonus","type":"uint256"},{"name":"refund","type":"uint256"}],"constant":true,"inputs":[{"name":"member","type":"address"}],"name":"earned","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"maxDeposit","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_duration_hours","type":"uint40"}],"name":"prolong","stateMutability":"Nonpayable","type":"Function"},{"name":"receive","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"received","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"ref","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"regulator","stateMutability":"View","type":"Function"},{"inputs":[{"name":"value","type":"uint40"}],"name":"setUnfreezeDayPercent","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"softcap","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint40"}],"constant":true,"name":"start","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"supply","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"token","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"totalBonus","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"totalDeposited","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint40"}],"constant":true,"name":"unfreezeDayPercent","stateMutability":"View","type":"Function"},{"outputs":[{"name":"upline","type":"address"},{"name":"referrals","type":"uint256"},{"name":"deposit","type":"uint256"},{"name":"bonus","type":"uint256"},{"name":"out_deposit","type":"uint256"},{"name":"out_bonus","type":"uint256"}],"constant":true,"inputs":[{"type":"address"}],"name":"users","stateMutability":"View","type":"Function"},{"outputs":[{"name":"tokens","type":"uint256"},{"name":"bonus","type":"uint256"},{"name":"refund","type":"uint256"}],"name":"withdraw","stateMutability":"Nonpayable","type":"Function"}];

    const ABI_TRC20 = [{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

    Vue.directive('range', {
        inserted(el, binding) {
            let down = e => {
                    window.addEventListener('mousemove', move);
                    window.addEventListener('mouseup', up);
                },
                move = e => {
                    let offset = el.parentElement.offsetLeft + el.parentElement.offsetParent.offsetLeft,
                        width = el.parentElement.offsetWidth,
                        event = document.createEvent("HTMLEvents");

                    event.initEvent('input', false, true);
                    event.value = Math.round(Math.min(width, Math.max(e.clientX - offset, 0)) / width * 100);
                    el.dispatchEvent(event);

                    e.preventDefault();
                },
                up = e => {
                    window.removeEventListener('mousemove', move);
                    window.removeEventListener('mouseup', up);
                };

            el.addEventListener('mousedown', down);
            el.parentElement.addEventListener('click', move);
        }
    });

    new Vue({
        mixins: [Components.VueTRON, Components.Notices, Components.Helper],
        el: '#App',
        data: {
            ido_route: '',
            visible: {
                modal: '',
                menu: false,
                status: 'active'
            },
            deposit: {
                upline: 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb',
                balance: 0,
                amount: 0,
                maxamount: 0
            },
            items: [],
            sel_item: null
        },
        mounted() {
            Object.assign(this, JSON.parse(this.$el.getAttribute('data')));

            let m = (location.hash + '; ' + document.cookie).match(/ref=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
            if(m) {
                document.cookie = "ref=" + m[1] + "; path=/; expires=" + (new Date(new Date().getTime() + 86400 * 365 * 1000)).toUTCString();
                this.deposit.upline = m[1];
            }

            this.getItems();
        },
        watch: {
            'tron.account'() {
                if(/^login/.test(this.visible.modal)) {
                    this.visible.modal = '';
                }
            }
        },
        computed: {
            itemsList() {
                return this.items.filter(v => this.visible.status == v.status);
            }
        },
        methods: {
            getContract(address, abi = null) {
                if(!this.tron.account) return;

                return new Promise((resolve, reject) => {
                    this.getTronWeb().then(tronWeb => {
                        resolve(tronWeb.contract(abi ? abi : ABI, address));
                    }, reject);
                });
            },
            getItems() {
                fetch('/api/v0/ido/').then(r => r.json()).then(r => {
                    let now = Math.round((new Date()).getTime() / 1000);

                    this.items = r.data.map(v => {
                        Object.assign(v, {
                            _open: false,
                            status: now < v.start ? 'soon' : (now > v.end ? 'ended' : 'active'),
                            total_deposited: 0,
                            deposit: 0,
                            earned: {
                                tokens: 0,
                                bonus: 0,
                                refund: 0
                            },
                            available: {
                                tokens: 0,
                                bonus: 0,
                                refund: 0
                            }
                        });

                        return v;
                    });
                });
            },
            async upItem(item) {
                if(!this.tron.account) return;

                let contract = await this.getContract(item.contract);

                item.total_deposited = (await contract.totalDeposited().call()) / 10 ** item.currency_decimals;

                let res = await contract.users(this.tron.account).call();
                item.deposit = res.deposit / 10 ** item.currency_decimals;

                try {
                    res = await contract.earned(this.tron.account).call();
                    item.earned.tokens = res.tokens / 10 ** item.token_decimals;
                    item.earned.bonus = res.bonus / 10 ** item.token_decimals;
                    item.earned.refund = res.refund / 10 ** item.currency_decimals;

                    res = await contract.available(this.tron.account).call();
                    item.available.tokens = res.tokens / 10 ** item.token_decimals;
                    item.available.bonus = res.bonus / 10 ** item.token_decimals;
                    item.available.refund = res.refund / 10 ** item.currency_decimals;
                }
                catch(e) {}
            },
            upBalance(item) {
                if(!this.tron.account) return;

                this.getTronWeb().then(tronWeb => {
                    tronWeb.contract(ABI_TRC20, item.currency_address).balanceOf(this.tron.account).call().then(res => {
                        this.deposit.balance = this.deposit.maxamount = res / 10 ** item.currency_decimals;

                        if(this.deposit.maxamount > item.max_deposit - item.deposit) {
                            this.deposit.maxamount = item.max_deposit - item.deposit;

                            if(this.deposit.maxamount > this.deposit.balance) {
                                this.deposit.maxamount = this.deposit.balance;
                            }
                        }
                    });
                });
            },
            async makeDeposit(item, deposit) {
                if(!this.tron.account) return;
                if(!(deposit.amount > 0)) return;
                if(deposit.balance < deposit.amount) return this.notice('Insufficient funds', 'error');

                let amount = '0x' + Math.floor(deposit.amount * (10 ** item.currency_decimals)).toString(16),
                    contract = await this.getContract(item.contract),
                    not = this.sendTxNotice();

                await this.regInRefIfNeed(this.deposit.upline);
                await this.infApproveIfNeed(item.currency_address, item.contract, amount);

                contract.deposit(amount, this.deposit.upline).send({feeLimit: 50000000}).then(tx => {
                    not.sent(tx);

                    deposit.amount = 0;
                    this.visible.modal = '';

                    setTimeout(() => {
                        this.upItem(item);
                    }, 3000);

                    this.awaitTx(tx).then(res => {
                        if(res.receipt.result == 'SUCCESS') {
                            not.success(tx);
                            this.upItem(item);
                        }
                        else not.error(res.receipt.result);
                    });
                }, not.cancel);
            },
            async makeWithdraw(item) {
                if(!this.tron.account) return;

                let contract = await this.getContract(item.contract),
                    old = await this.getContract('TVmb2otX7QwsXmwDzcANttX1ZXWd6DzhR6'),
                    not = this.sendTxNotice();

                contract.withdraw().send({feeLimit: 50000000}).then(tx => {
                    not.sent(tx);

                    // BUG
                    if(item.available.refund > 0) old.withdraw().send({feeLimit: 50000000});
                    // BUG

                    setTimeout(() => {
                        this.upItem(item);
                    }, 3000);

                    this.awaitTx(tx).then(res => {
                        if(res.receipt.result == 'SUCCESS') {
                            not.success(tx);
                            this.upItem(item);
                        }
                        else not.error(res.receipt.result);
                    });
                }, not.cancel);
            }
        }
    });
})();