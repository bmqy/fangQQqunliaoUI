Vue.component('members', {
    template: '<li>' +
    '<div class="member-list-avatar" style="background-image: url(&quot;css/imgs/avatar.png&quot;);"></div>' +
    '<div class="member-list-name vip">{{ member.nickname }}</div>' +
    '<div class="member-list-status">' +
    '<span class="icon icon-qunzhu qzone"></span>' +
    '</div>' +
    '</li>',
    props: ['members'],
    methods: {}
});