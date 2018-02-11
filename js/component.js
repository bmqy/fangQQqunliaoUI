Vue.component('msglist', {
    template: '<li>'+
    '<div class="msg-list-head">\n'+
    '<span>'+ sQQName +'</span>(<span class="fcLightBlue">'+ sQQNumber +'</span>)<span>'+ sTimes +'</span>'+
    '</div>\n'+
    '<div class="msg-list-body">\n'+ oMessage.innerHTML +'</div>\n'+
    '</li>',
    props: ['value'],
    methods: {}
});