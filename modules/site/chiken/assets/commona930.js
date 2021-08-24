(function() {
    'use strict';

    const ABI = [{"inputs":[{"name":"_currency","type":"address"}],"stateMutability":"Nonpayable","type":"Constructor"},{"inputs":[{"indexed":true,"name":"user","type":"address"},{"name":"amount","type":"uint256"}],"name":"Charge","type":"Event"},{"inputs":[{"indexed":true,"name":"user","type":"address"},{"name":"amount","type":"uint256"}],"name":"Claim","type":"Event"},{"inputs":[{"indexed":true,"name":"member","type":"address"}],"name":"Feed","type":"Event"},{"inputs":[{"indexed":true,"name":"member","type":"address"}],"name":"Register","type":"Event"},{"inputs":[{"indexed":true,"name":"member","type":"address"}],"name":"Resurrect","type":"Event"},{"inputs":[{"indexed":true,"name":"user","type":"address"},{"name":"level","type":"uint256"}],"name":"Upgrade","type":"Event"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"inputs":[{"name":"amount","type":"uint256"}],"name":"claim","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"name":"currency","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"member","type":"address"}],"name":"earned","stateMutability":"View","type":"Function"},{"name":"feed","stateMutability":"Payable","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"feedPrice","stateMutability":"View","type":"Function"},{"name":"register","stateMutability":"Payable","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"registerPrice","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"regulator","stateMutability":"View","type":"Function"},{"inputs":[{"name":"token","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"rescue","stateMutability":"Nonpayable","type":"Function"},{"name":"resurrect","stateMutability":"Payable","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"resurrectPrice","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_registerPrice","type":"uint256"},{"name":"_upgradePrice","type":"uint256"},{"name":"_resurrectPrice","type":"uint256"},{"name":"_feedPrice","type":"uint256"}],"name":"setPrices","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"totalSupply","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","stateMutability":"Nonpayable","type":"Function"},{"name":"upgrade","stateMutability":"Payable","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"upgradePrice","stateMutability":"View","type":"Function"},{"outputs":[{"name":"register","type":"uint40"},{"name":"lifetime","type":"uint40"},{"name":"feeding","type":"uint40"},{"name":"charge","type":"uint40"},{"name":"level","type":"uint256"},{"name":"avaliable","type":"uint256"}],"inputs":[{"type":"address"}],"name":"users","stateMutability":"View","type":"Function"}];

    const ABI_POOL = [{"inputs":[{"name":"_chiken","type":"address"},{"name":"_dist","type":"address"},{"name":"_start","type":"uint40"},{"name":"_duration_days","type":"uint40"}],"stateMutability":"Nonpayable","type":"Constructor"},{"inputs":[{"indexed":true,"name":"member","type":"address"}],"name":"Register","type":"Event"},{"inputs":[{"name":"amount","type":"uint256"}],"name":"Repayment","type":"Event"},{"inputs":[{"indexed":true,"name":"member","type":"address"},{"name":"amount","type":"uint256"}],"name":"Reward","type":"Event"},{"inputs":[{"indexed":true,"name":"member","type":"address"},{"name":"amount","type":"uint256"}],"name":"Stake","type":"Event"},{"inputs":[{"indexed":true,"name":"member","type":"address"},{"name":"amount","type":"uint256"}],"name":"Withdraw","type":"Event"},{"outputs":[{"type":"uint256"}],"inputs":[{"type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"calcRate","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"chiken","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"dist","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"distribution","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint40"}],"name":"duration","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"member","type":"address"}],"name":"earned","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint40"}],"name":"finish","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"last_rate","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint40"}],"name":"last_update","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"type":"address"}],"name":"paids","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"rate","stateMutability":"View","type":"Function"},{"name":"register","stateMutability":"Payable","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"registerPrice","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"type":"address"}],"name":"registers","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"regulator","stateMutability":"View","type":"Function"},{"inputs":[{"name":"amount","type":"uint256"}],"name":"repayment","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"token","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"rescue","stateMutability":"Nonpayable","type":"Function"},{"name":"reward","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"type":"address"}],"name":"rewards","stateMutability":"View","type":"Function"},{"inputs":[{"name":"value","type":"uint256"}],"name":"setRegisterPrice","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"amount","type":"uint256"}],"name":"stake","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint40"}],"name":"start","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"totalSupply","stateMutability":"View","type":"Function"},{"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","stateMutability":"Nonpayable","type":"Function"}];

    Vue.directive('timer', {
        bind(el, binding) {
            let fn = () => {
                let now = Math.floor((new Date()).getTime() / 1000),
                    days = Math.max(0, Math.floor((el.tvalue - now) / 86400));

                el.innerHTML = (days > 0 ? days + ' days ' : '')
                    + Math.max(0, Math.floor((el.tvalue - now) % 86400 / 3600)).toString().padStart(2, '0')
                    + ':' + Math.max(0, Math.floor((el.tvalue - now) % 3600 / 60)).toString().padStart(2, '0')
                    + ':' + Math.max(0, Math.floor((el.tvalue - now) % 3600 % 60)).toString().padStart(2, '0');
            };

            el.tid = setInterval(fn, 1000);
            el.tvalue = binding.value;
            fn();
        },
        update(el, binding) {
            el.tvalue = binding.value;
        },
        unbind(el, binding) {
            clearInterval(el.tid);
        }
    });

    new Vue({
        mixins: [Components.VueTRON, Components.Notices, Components.Helper],
        el: '#App',
        data: {
            chiken_contract: '',
            lorypool_contract: '',
            now: Math.round(Date.now() / 1000),
            apy: 0,
            apy_lory: 0,
            visible: {
                modal: '',
                menu: false,
                tab: 'game'
            },
            prices: {
                register: 1000,
                upgrade: 1000,
                resurrect: 500,
                feed: 20,
                pool: 1000
            },
            user: {
                register: 0,
                lifetime: 0,
                feeding: 0,
                level: 0,
                earned: 0,
                lory: {
                    register: false,
                    balance: 0,
                    earned: 0
                }
            },
            amount: {
                claim: 0,
                stake: 0,
                unstake: 0
            }
        },
        mounted() {
            Object.assign(this, JSON.parse(this.$el.getAttribute('data')));

            fetch('/api/v0/rates/').then(r => r.json()).then(r => {
                this.apy = parseInt(75 / ((this.prices.register + this.prices.feed * 75) / r.data.ume) * 100 * 365 / 75);
                this.apy_lory = parseInt((25000 / 1209600 * 31526000 * 100) / (r.data.ume / r.data.lory) / (13000 * (13000 / 7785))); // 10000 - dist, 1209600 - duration, 13000 - staked, 7785 - dist lost
            });

            setInterval(this.getUser, 30000);
        },
        watch: {
            'tron.account'() {
                if(/^login/.test(this.visible.modal)) {
                    this.visible.modal = '';
                }

                this.getUser();
            }
        },
        computed: {
            isActive() { return this.user.register + this.user.lifetime > this.now; },
            isDead() { return this.now - this.user.feeding > 86400 * 7; },
            isFeeding() { return this.now - this.user.feeding > 86400; }
        },
        methods: {
            async getUser() {
                if(!this.tron.account) return;

                this.now = Math.round(Date.now() / 1000);

                let tronWeb = await this.getTronWeb(),
                    contract = tronWeb.contract(ABI, this.chiken_contract),
                    pool = tronWeb.contract(ABI_POOL, this.lorypool_contract);

                this.prices.feed = (await contract.feedPrice().call()) / 1e6;

                let user = await contract.users(this.tron.account).call();

                this.user.register = user.register;
                this.user.lifetime = user.lifetime;
                this.user.feeding = user.feeding;
                this.user.level = parseInt(user.level);
                this.user.earned = (parseInt(user.avaliable) + parseInt(await contract.earned(this.tron.account).call())) / 1e8;

                this.user.lory.register = !!(await pool.registers(this.tron.account).call());
                this.user.lory.balance = (await pool.balanceOf(this.tron.account).call()) / 1e8;
                this.user.lory.earned = (await pool.earned(this.tron.account).call()) / 1e8;
            },
            sendContract(args = {}, cb = () => {}) {
                if(!this.tron.account) return;

                let contract = tronWeb.contract((args.abi ? args.abi : ABI), (args.contract ? args.contract : this.chiken_contract)),
                    not = this.sendTxNotice();

                contract[args.method].apply(contract, args.params || []).send({callValue: args.value || 0, feeLimit: args.feeLimit || 50000000}).then(tx => {
                    not.sent(tx);

                    setTimeout(() => { cb(tx); }, 5000);

                    this.awaitTx(tx).then(res => {
                        if(res.receipt.result == 'SUCCESS') {
                            not.success(tx);
                            cb(tx);
                        }
                        else not.error(res.receipt.result);
                    });
                }, not.cancel);
            },
            register() {
                this.sendContract({method: 'register', value: this.prices.register * 1e6}, this.getUser);
            },
            upgrade() {
                this.sendContract({method: 'upgrade', value: this.prices.upgrade * 1e6}, this.getUser);
            },
            resurrect() {
                this.sendContract({method: 'resurrect', value: this.prices.resurrect * 1e6}, this.getUser);
            },
            feed() {
                this.sendContract({method: 'feed', value: this.prices.feed * this.user.level * 1e6}, this.getUser);
            },
            claim() {
                if(!(this.amount.claim > 0)) return;

                this.sendContract({method: 'claim', params: [parseInt(this.amount.claim * 1e8)]}, this.getUser);
            },
            registerPool() {
                this.sendContract({contract: this.lorypool_contract, abi: ABI_POOL, method: 'register', value: this.prices.pool * 1e6}, this.getUser);
            },
            async stake() {
                let amount = parseInt(this.amount.stake * 1e8);
                if(!(amount > 0)) return;

                await this.infApproveIfNeed(this.chiken_contract, this.lorypool_contract, amount);

                this.sendContract({contract: this.lorypool_contract, abi: ABI_POOL, method: 'stake', params: [amount]}, this.getUser);
            },
            unstake() {
                if(!(this.amount.unstake > 0)) return;

                this.sendContract({contract: this.lorypool_contract, abi: ABI_POOL, method: 'withdraw', params: [parseInt(this.amount.unstake * 1e8)]}, this.getUser);
            },
            reward() {
                this.sendContract({contract: this.lorypool_contract, abi: ABI_POOL, method: 'reward'}, this.getUser);
            },
        }
    });
})();