import app from 'flarum/app';
import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import icon from 'flarum/helpers/icon';

app.initializers.add('davis-customfooter-forum', function() {
    extend(HeaderPrimary.prototype, 'init', function() {
        this.isopen = false;
        $('body').append('<div id="customFooter" style="bottom: 0; width: 100%;"><div class="footercontent">'+app.forum.attribute('davis-customfooter.customtext')+'</div></div>');
        $('head').append('<style>'+app.forum.attribute("davis-customfooter.cssofheader")+'</style>');
        $('head').append('<script>'+app.forum.attribute("davis-customfooter.jsofheader")+'</script>');
    });
});