(function() {
    'use strict';

    const ABI = [{"inputs":[{"indexed":true,"name":"account","type":"address"},{"indexed":true,"name":"id","type":"uint256"},{"name":"token","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"currency","type":"address"},{"name":"sellerBet","type":"uint256"},{"name":"fixPrice","type":"bool"},{"name":"start","type":"uint40"},{"name":"end","type":"uint40"},{"name":"cycle","type":"uint256"}],"name":"Add","type":"Event"},{"inputs":[{"indexed":true,"name":"account","type":"address"},{"indexed":true,"name":"id","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"cycle","type":"uint256"}],"name":"Bet","type":"Event"},{"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"name":"end","type":"uint40"},{"name":"cycle","type":"uint256"}],"name":"UpTime","type":"Event"},{"inputs":[{"indexed":true,"name":"account","type":"address"},{"indexed":true,"name":"id","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"cycle","type":"uint256"}],"name":"Winner","type":"Event"},{"inputs":[{"indexed":true,"name":"account","type":"address"},{"indexed":true,"name":"id","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"cycle","type":"uint256"}],"name":"Withdraw","type":"Event"},{"inputs":[{"name":"token","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"accept","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"token","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"value","type":"uint256"}],"name":"bet","stateMutability":"Nonpayable","type":"Function"},{"payable":true,"inputs":[{"name":"token","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"betTRX","stateMutability":"Payable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"getId","stateMutability":"Pure","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"member","type":"address"},{"name":"cycle","type":"uint256"}],"name":"getMemberBet","stateMutability":"View","type":"Function"},{"outputs":[{"name":"id","type":"uint256"},{"name":"creator","type":"address"},{"name":"owner","type":"address"},{"name":"token","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"currency","type":"address"},{"name":"sellerBet","type":"uint256"},{"name":"fixPrice","type":"bool"},{"name":"lider","type":"address"},{"name":"liderBet","type":"uint256"},{"name":"start","type":"uint40"},{"name":"end","type":"uint40"},{"name":"cycle","type":"uint256"}],"constant":true,"inputs":[{"type":"uint256"}],"name":"lots","stateMutability":"View","type":"Function"},{"inputs":[{"name":"token","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"remove","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"token","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"currency","type":"address"},{"name":"sellerBet","type":"uint256"},{"name":"fixPrice","type":"bool"},{"name":"start","type":"uint40"},{"name":"end","type":"uint40"}],"name":"run","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"token","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"cycle","type":"uint256"}],"name":"withdraw","stateMutability":"Nonpayable","type":"Function"}];

    const ABI_TOKEN = [{"stateMutability":"Nonpayable","type":"Constructor"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"Event"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"Event"},{"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"Event"},{"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"Event"},{"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"Event"},{"inputs":[{"name":"account","type":"address"}],"name":"addMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"constant":true,"name":"baseURI","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"tokenURI","type":"string"}],"name":"mintWithTokenURI","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"string"}],"constant":true,"name":"name","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","stateMutability":"View","type":"Function"},{"name":"renounceMinter","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"constant":true,"name":"symbol","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"tokenURI","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"totalSupply","stateMutability":"View","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","stateMutability":"Nonpayable","type":"Function"}];

    const ZERO_ADDRESS = 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb';
    let last_account;

    Vue.directive('timer', {
        bind(el, binding) {
            el.tid = setInterval(() => {
                let now = Math.floor((new Date()).getTime() / 1000);

                el.innerHTML = '<span>' + Math.max(0, Math.floor((binding.value - now) / 86400)) + ' days</span>&nbsp;' 
                    + '<span>' + Math.max(0, Math.floor((binding.value - now) % 86400 / 3600)).toString().padStart(2, '0') + '</span>'
                    + ':<span>' + Math.max(0, Math.floor((binding.value - now) % 3600 / 60)).toString().padStart(2, '0') + '</span>'
                    + ':<span>' + Math.max(0, Math.floor((binding.value - now) % 3600 % 60)).toString().padStart(2, '0') + '</span>';
            }, 1000);
        },
        unbind(el, binding) {
            clearInterval(el.tid);
        }
    });

    window.App = new Vue({
        mixins: [Components.VueTRON, Components.Notices, Components.Helper],
        el: '#App',
        data: {
            auction_address: '',
            offers_address: '',
            visible: {
                menu: false,
                modal: ''
            },
            send: {
                trc721_token: '',
                trc721_id: '',
                to: ''
            },
            image: {
                name: '',
                src: ''
            },
            add_lot: {
                type: 'auction'
            }
        },
        mounted() {
            Object.assign(this, JSON.parse(this.$el.getAttribute('data')));

            //setTimeout(() => { if(!this.tron.account) this.visible.modal = 'login'; }, 1000);
        },
        watch: {
            'tron.account'() {
                document.cookie = 'user_address=' + this.tron.account + '; path=/; max-age=2592000';
                if(last_account && last_account != this.tron.account) location.reload();
                else last_account = this.tron.account;
            }
        },
        methods: {
            async getContract(abi = null, address = null) {
                return (await this.getTronWeb()).contract(abi || ABI, address || this.auction_address);
            },
            async sign() {
                return (await this.getTronWeb()).trx.sign('0x4133797172325a70376a47567859636c7163566378637953');
            },
            async signAndSubmitForm(form) {
                form.sign.value = await this.sign();
                form.submit();
            },
            async removeLot(id) {
                if(confirm('Are you sure?')) {
                    await fetch('/market/my/removeLot/', {
                        method: 'PUT',
                        body: JSON.stringify({id: id, csrf: document.querySelector('meta[name="csrf"]').content, sign: await this.sign()})
                    });

                    location.reload();
                }
            },
            async removeCollection(id) {
                if(confirm('Are you sure?')) {
                    await fetch('/market/my/removeCollection/', {
                        method: 'PUT',
                        body: JSON.stringify({id: id, csrf: document.querySelector('meta[name="csrf"]').content, sign: await this.sign()})
                    });

                    location.reload();
                }
            },
            async collectionEditLot(collection_id, lot_id) {
                let res = await (await fetch('/market/my/collectionEditLot/', {
                    method: 'PUT',
                    body: JSON.stringify({collection_id, lot_id, csrf: document.querySelector('meta[name="csrf"]').content, sign: await this.sign()})
                })).json();

                if(res.error) this.notice(res.error, 'error');

                return res;
            },
            async runAuction(form) {
                let auction = await this.getContract(),
                    token = await this.getContract(ABI_TOKEN, form.trc721_token.value),
                    currencies = (await (await fetch('/api/v0/tokens/')).json()).data,
                    not = this.sendTxNotice(),
                    start = parseInt((new Date(form.start.value)).getTime() / 1000);

                if(start < parseInt((new Date()).getTime() / 1000)) return Notice.notice('The date of the auction must be in the future', 'error');

                if((await token.getApproved(form.trc721_id.value).call()) != this.auction_address) {
                    await token.approve(this.auction_address, form.trc721_id.value).send({feeLimit: 50000000});
                }

                let tx = await auction.run(
                    form.trc721_token.value,
                    form.trc721_id.value,
                    (form.currency.value || ZERO_ADDRESS),
                    (parseInt(form.price.value) || 0) * (10 ** currencies.filter(v => v.address == form.currency.value)[0].decimals),
                    (parseInt(form.fix_price.value) > 0 ? true : false),
                    start,
                    parseInt(start + form.duration.value * 86400)
                ).send({feeLimit: 100000000});
                 
                not.sent(tx);

                if((await (await fetch('/sync/' + tx + '/60/')).json()).success) {
                    location.reload();
                }

                let res = await this.awaitTx(tx);

                if(res.receipt.result == 'SUCCESS') {
                    not.success(tx);
                }
                else not.error(res.receipt.result);
            },
            async acceptAuction(trc721_token, trc721_id, offer) {
                let auction = await this.getContract(null, offer ? this.offers_address : null),
                    not = this.sendTxNotice();

                if(offer) {
                    let token = await this.getContract(ABI_TOKEN, trc721_token);

                    if((await token.getApproved(trc721_id).call()) != this.auction_address) {
                        await token.approve(this.offers_address, trc721_id).send({feeLimit: 50000000});
                    }
                }
                
                let tx = await auction.accept(trc721_token, trc721_id).send({feeLimit: 100000000});
                 
                not.sent(tx);

                if((await (await fetch('/sync/' + tx + '/60/')).json()).success) {
                    location.reload();
                }

                let res = await this.awaitTx(tx);

                if(res.receipt.result == 'SUCCESS') {
                    not.success(tx);
                }
                else not.error(res.receipt.result);
            },
            async removeAuction(trc721_token, trc721_id, offer) {
                let auction = await this.getContract(null, offer ? this.offers_address : null),
                    not = this.sendTxNotice(),
                    tx = await auction.remove(trc721_token, trc721_id).send({feeLimit: 100000000});
                 
                not.sent(tx);

                if((await (await fetch('/sync/' + tx + '/60/')).json()).success) {
                    location.reload();
                }

                let res = await this.awaitTx(tx);

                if(res.receipt.result == 'SUCCESS') {
                    not.success(tx);
                }
                else not.error(res.receipt.result);
            },
            async betAuction(form) {
                let auction = await this.getContract(null, form.offer && parseInt(form.offer.value) > 0 ? this.offers_address : null),
                    not = this.sendTxNotice(),
                    amount = '0x' + Math.floor(form.amount.value * (10 ** form.token_decimals.value)).toString(16),
                    tx = null;

                if(form.token_address.value) {
                    await this.infApproveIfNeed(form.token_address.value, form.offer && parseInt(form.offer.value) > 0 ? this.offers_address : this.auction_address, amount);

                    tx = await auction.bet(form.trc721_token.value, form.trc721_id.value, amount).send({feeLimit: 100000000});
                }
                else {
                    tx = await auction.betTRX(form.trc721_token.value, form.trc721_id.value).send({
                        feeLimit: 100000000,
                        callValue: amount
                    });
                }

                not.sent(tx);

                if((await (await fetch('/sync/' + tx + '/60/')).json()).success) {
                    location.reload();
                }

                let res = await this.awaitTx(tx);

                if(res.receipt.result == 'SUCCESS') {
                    not.success(tx);
                }
                else not.error(res.receipt.result);
            },
            async withdrawAuction(trc721_token, trc721_id, cycle, offer) {
                let auction = await this.getContract(null, offer ? this.offers_address : null),
                    not = this.sendTxNotice(),
                    tx = await auction.withdraw(trc721_token, trc721_id, cycle).send({feeLimit: 100000000});
                 
                not.sent(tx);

                if((await (await fetch('/sync/' + tx + '/60/')).json()).success) {
                    location.reload();
                }

                let res = await this.awaitTx(tx);

                if(res.receipt.result == 'SUCCESS') {
                    not.success(tx);
                }
                else not.error(res.receipt.result);
            },
            async sendToken(trc721_token, trc721_id, to) {
                if(!this.tron.account) return;

                let token = await this.getContract(ABI_TOKEN, trc721_token),
                    not = this.sendTxNotice(),
                    tx = await token.safeTransferFrom(this.tron.account, to, trc721_id).send({feeLimit: 50000000});
                 
                not.sent(tx);

                this.visible.modal = '';

                if((await (await fetch('/sync/' + tx + '/60/')).json()).success) {
                    location.reload();
                }

                let res = await this.awaitTx(tx);

                if(res.receipt.result == 'SUCCESS') {
                    not.success(tx);
                }
                else not.error(res.receipt.result);
            }
        }
    });
})();