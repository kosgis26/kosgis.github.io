<!DOCTYPE html> <!--[if IE 6]><html id="ie6" lang="ru-RU"> <![endif]--> <!--[if IE 7]><html id="ie7" lang="ru-RU"> <![endif]--> <!--[if IE 8]><html id="ie8" lang="ru-RU"> <![endif]--> <!--[if !(IE 6) | !(IE 7) | !(IE 8)  ]><!--><html lang="ru-RU"> <!--<![endif]--><head><link rel="stylesheet" type="text/css" href="http://www.stijit.com/wp-content/cache/minify/000000/hYxBDsIwDAQ_1MaN6Be48QdkElMSBSfEbkt-XyRUCcSB2440OwOcZhe8BdGWqLOwNgkRe6ZVEqlSFXAisGAKHjVkPvIUmEx8zFRbN-x_KsiUQG65qsue5GP-WAUnOivdS0J9mVHgiuzaJT_h3TU799YczPgv8I0b.css?fcae6a" media="all" /><meta charset="UTF-8" /><title>html5shiv.js скрипт для поддержки старыми IE6,7,8 элементов html5 | Stijit.com</title><link rel="pingback" href="http://www.stijit.com/xmlrpc.php" /> <!--[if lt IE 9]><script src="http://www.stijit.com/wp-content/themes/Lucid1/js/html5.js?fcae6a" type="text/javascript"></script><![endif]--><script type="text/javascript">document.documentElement.className='js';</script><meta name="description" content="Код скрипта html5shiv.js для поддержки старыми IE6,7,8 элементов html5. Как сделать поддержку html5 в IE"/><meta name="robots" content="noodp"/><meta name="keywords" content="html5shiv.js, скрипт html5shiv.js, код скрипта html5shiv.js, старые IE и html5, старые IE и элементы html5, IE поддержка html5"/><link rel="canonical" href="http://www.stijit.com/html-css/html5shiv-js-ie-support" /> <script type="text/javascript">/*<![CDATA[*/window._wpemojiSettings={"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/72x72\/","ext":".png","source":{"concatemoji":"http:\/\/www.stijit.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.4.4"}};!function(a,b,c){function d(a){var c,d,e,f=b.createElement("canvas"),g=f.getContext&&f.getContext("2d"),h=String.fromCharCode;return g&&g.fillText?(g.textBaseline="top",g.font="600 32px Arial","flag"===a?(g.fillText(h(55356,56806,55356,56826),0,0),f.toDataURL().length>3e3):"diversity"===a?(g.fillText(h(55356,57221),0,0),c=g.getImageData(16,16,1,1).data,g.fillText(h(55356,57221,55356,57343),0,0),c=g.getImageData(16,16,1,1).data,e=c[0]+","+c[1]+","+c[2]+","+c[3],d!==e):("simple"===a?g.fillText(h(55357,56835),0,0):g.fillText(h(55356,57135),0,0),0!==g.getImageData(16,16,1,1).data[0])):!1}function e(a){var c=b.createElement("script");c.src=a,c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f,g;c.supports={simple:d("simple"),flag:d("flag"),unicode8:d("unicode8"),diversity:d("diversity")},c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.simple&&c.supports.flag&&c.supports.unicode8&&c.supports.diversity||(g=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1)):(a.attachEvent("onload",g),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&&f.twemoji&&(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);/*]]>*/</script><meta content="Lucid v.1.0" name="generator"/><style type="text/css">img.wp-smiley,img.emoji{display:inline !important;border:none !important;box-shadow:none !important;height:1em !important;width:1em !important;margin:0
.07em !important;vertical-align:-0.1em !important;background:none !important;padding:0
!important}</style><link rel='stylesheet' id='google_font_open_sans-css'  href='http://fonts.googleapis.com/css?family=Open+Sans%3A400%2C700%2C300&#038;ver=4.4.4' type='text/css' media='all' /><link rel='stylesheet' id='google_font_open_sans_condensed-css'  href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed%3A300%2C700&#038;ver=4.4.4' type='text/css' media='all' /><script type="text/javascript" src="http://www.stijit.com/wp-content/cache/minify/000000/M9bPKixNLarUMYYydHMz04sSS1L1cjPzdAz0fUqTM1MM9VMLEvNSc_SLM_KLSpLzU1KL9bOK9VNL4hEC8WlF-XklqXkpAA.js?fcae6a"></script><link rel='https://api.w.org/' href='http://www.stijit.com/wp-json/' /><meta name="generator" content="WordPress 4.4.4" /><link rel="alternate" type="application/json+oembed" href="http://www.stijit.com/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.stijit.com%2Fhtml-css%2Fhtml5shiv-js-ie-support" /><link rel="alternate" type="text/xml+oembed" href="http://www.stijit.com/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.stijit.com%2Fhtml-css%2Fhtml5shiv-js-ie-support&#038;format=xml" /><link rel="shortcut icon" href="http://www.stijit.com/wp-content/uploads/2014/02/favicon.ico?fcae6a" type="image/x-icon" /><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" /><style>#featured .flex-direction-nav a:hover, #video-slider-section .flex-direction-nav a:hover{background-color:#ffb600}#featured_section .active-slide .post-meta, #featured_section .switcher_hover .post-meta, .et_tab_link_hover .post-meta{background:#ffa500}h3.main-title{background-color:#ffa500;-moz-box-shadow:inset 0 0 10px rgba(255,140,0,0.1);-webkit-box-shadow:inset 0 0 10px rgba(255,140,0,0.1);box-shadow:inset 0 0 10px rgba(255,140,0,0.1);border:1px
solid #ff8c00}.widget
li{background:url(http://www.stijit.com/wp-content/themes/Lucid1/images/widget-bullet.png) no-repeat 24px 24px}.footer-widget
li{background:url(http://www.stijit.com/wp-content/themes/Lucid1/images/widget-bullet.png) no-repeat 0 4px}.et_mobile_menu li
a{background-image:url(http://www.stijit.com/wp-content/themes/Lucid1/images/widget-bullet.png)}a{color:#ffa300}.et_video_play{background-color:#ffa500}#second-menu>ul>li>a:hover{background-color:#ffa500}#second-menu ul ul li a:hover{background-color:#ffb122}#second-menu ul.nav li
ul{background:#ffa500}#second-menu ul ul li
a{border-top:1px solid #ffb122}</style><style type="text/css" id="custom-background-css">body.custom-background{background-color:#eee;background-image:url('http://www.stijit.com/wp-content/uploads/2013/12/backpaper.png');background-repeat:repeat;background-position:top center;background-attachment:scroll}</style><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-46722264-1','stijit.com');ga('send','pageview');</script></head><body class="single single-post postid-622 single-format-standard custom-background ie"> <header id="main-header"><div class="container clearfix"> <a href="#" class="mobile_nav closed">Pages Menu<span></span></a> <a class="logo-small" href="http://www.stijit.com"> <img src="http://www.stijit.com/wp-content/uploads/2014/01/stijit-logo.png?fcae6a" alt="Stijit.com"/> </a> <nav id="top-menu"><ul id="menu-top-menu-1" class="nav"><li id="menu-item-892" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-892"><a title="auto tests" href="http://www.stijit.com/auto-tests">Auto tests</a></li><li id="menu-item-86" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-86"><a title="javascript" href="http://www.stijit.com/javascript">JavaScript</a></li><li id="menu-item-313" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-313"><a title="git" href="http://www.stijit.com/git">Git</a></li><li id="menu-item-25" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-25"><a title="Маркетинг поисковых систем" href="http://www.stijit.com/sem-seo">SEM</a></li><li id="menu-item-645" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-645"><a title="web аналитика" href="http://www.stijit.com/web-analytics">Analytics</a></li></ul> </nav><div id="social-icons"><a href='https://twitter.com/Stijit' target='_blank' rel='nofollow'><img alt='Twitter' src="http://www.stijit.com/wp-content/themes/Lucid1/images/twitter.png?fcae6a" /></a></div><div id="search"><div id="search-form"><form method="get" id="searchform" action="http://www.stijit.com/"> <input type="text" value="Искать..." name="s" id="searchinput" /> <input type="image" src="http://www.stijit.com/wp-content/themes/Lucid1/images/search_btn.png?fcae6a" id="searchsubmit" alt="Search on stijit.com" /></form></div></div></div> </header></div><div id="secondary-menu"><div class="container"> <a href="#" class="mobile_nav closed">Categories Menu<span></span></a> <nav id="second-menu" class="clearfix"><ul id="menu-top-menu-2" class="nav"><li id="menu-item-830" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-830"><a title="jquery google" href="http://www.stijit.com/javascript/podklyuchit-biblioteku-jquery">Подключение jQuery</a></li><li id="menu-item-833" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-833"><a title="виды селекторов css" href="http://www.stijit.com/html-css/30-css-selektorov-selectors">CSS селекторы</a></li></ul> </nav></div></div><div id="main-area"><div class="container"><div id="content-area" class="clearfix"><div id="left-area"><div id="breadcrumbs" class="clearfix"> <a href="http://www.stijit.com" class="breadcrumbs_home">Главная</a> <span class="raquo">&raquo;</span> <a href="http://www.stijit.com/html-css">HTML/CSS</a> <span class="raquo">&raquo;</span> html5shiv.js скрипт для поддержки старыми IE6,7,8 элементов html5</div> <article id="post-622" class="entry clearfix post-622 post type-post status-publish format-standard has-post-thumbnail hentry category-html-css"><div class="post-thumbnail"> <img src="http://www.stijit.com/wp-content/uploads/2014/03/html5shiv-js-ie-support-36544_630x210.jpg?fcae6a" alt='html5shiv.js скрипт для поддержки старыми IE6,7,8 элементов html5' width='630' height='210' /></div><div class="post_content clearfix"><h1 class="title">html5shiv.js скрипт для поддержки старыми IE6,7,8 элементов html5</h1><div itemscope itemtype="http://schema.org/Article"><span itemprop="articleBody"><p>Старые версии Internet Explorer (IE) 6,7,8 не поддерживают элементы и теги html5. Чтобы это исправить, для <a href="/html-css/html5-markup-tags" target="_blank">основных элементов разметки html5</a> можно использовать такой хак:</p><pre class="prettyprint">
  &lt;!-- Hack for IE6,7,8 to support html5 elements --&gt;
  &lt;!--&#91;if lt IE 9&#93;&gt;
    &lt;script&gt;
      document.createElement(&#39;header&#39;);
      document.createElement(&#39;nav&#39;);
      document.createElement(&#39;main&#39;);
      document.createElement(&#39;article&#39;);
      document.createElement(&#39;aside&#39;);
      document.createElement(&#39;footer&#39;);
    &lt;&#47;script&gt;
    &lt;!&#91;endif&#93;--&gt;
</pre><ol>Или подключить скрипт html5shiv.js &#8212; для этого:</p><li>Скопировать приведенный ниже скрипт;</li><li>Сохранить его в файл <code>html5shiv.js</code>;</li><li>Залить на сайт в папку к остальным javascript файлам, к примеру <code>js</code>;</li><li>Подключить скрипт, прописав<pre class="prettyprint">&lt;script src=&#34;js&#47;html5shiv.js&#34;&gt;&lt;&#47;script&gt;</pre><p> в <code>header</code> страниц, на которых вы хотите его использовать. Часто бывает необходимо подключить скрипт на всех страницах, т.к. <strong>поддержка тегов html5 в старых IE</strong> нужна по всему сайту.</li></ol><p>Итак, <strong>полный код скрипта html5shiv.js</strong>:</p><pre class="prettyprint">
&#47;**
* @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT&#47;GPL2 Licensed
*&#47;
;(function(window, document) {
&#47;*jshint evil:true *&#47;
  &#47;** version *&#47;
  var version = &#39;3.7.0&#39;;

  &#47;** Preset options *&#47;
  var options = window.html5 || {};

  &#47;** Used to skip problem elements *&#47;
  var reSkip = &#47;^&lt;|^(?:button|map|select|textarea|object|iframe|option|optgroup)$&#47;i;

  &#47;** Not all elements can be cloned in IE **&#47;
  var saveClones = &#47;^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$&#47;i;

  &#47;** Detect whether the browser supports default html5 styles *&#47;
  var supportsHtml5Styles;

  &#47;** Name of the expando, to work with multiple documents or to re-shiv one document *&#47;
  var expando = &#39;_html5shiv&#39;;

  &#47;** The id for the the documents expando *&#47;
  var expanID = 0;

  &#47;** Cached data for each document *&#47;
  var expandoData = {};

  &#47;** Detect whether the browser supports unknown elements *&#47;
  var supportsUnknownElements;

  (function() {
    try {
        var a = document.createElement(&#39;a&#39;);
        a.innerHTML = &#39;&lt;xyz&gt;&lt;&#47;xyz&gt;&#39;;
        &#47;&#47;if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
        supportsHtml5Styles = (&#39;hidden&#39; in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {
          &#47;&#47; assign a false positive if unable to shiv
          (document.createElement)(&#39;a&#39;);
          var frag = document.createDocumentFragment();
          return (
            typeof frag.cloneNode == &#39;undefined&#39; ||
            typeof frag.createDocumentFragment == &#39;undefined&#39; ||
            typeof frag.createElement == &#39;undefined&#39;
          );
        }());
    } catch(e) {
      &#47;&#47; assign a false positive if detection fails =&gt; unable to shiv
      supportsHtml5Styles = true;
      supportsUnknownElements = true;
    }

  }());

  &#47;*--------------------------------------------------------------------------*&#47;

  &#47;**
   * Creates a style sheet with the given CSS text and adds it to the document.
   * @private
   * @param {Document} ownerDocument The document.
   * @param {String} cssText The CSS text.
   * @returns {StyleSheet} The style element.
   *&#47;
  function addStyleSheet(ownerDocument, cssText) {
    var p = ownerDocument.createElement(&#39;p&#39;),
        parent = ownerDocument.getElementsByTagName(&#39;head&#39;)&#91;0&#93; || ownerDocument.documentElement;

    p.innerHTML = &#39;x&lt;style&gt;&#39; + cssText + &#39;&lt;&#47;style&gt;&#39;;
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }

  &#47;**
   * Returns the value of `html5.elements` as an array.
   * @private
   * @returns {Array} An array of shived element node names.
   *&#47;
  function getElements() {
    var elements = html5.elements;
    return typeof elements == &#39;string&#39; ? elements.split(&#39; &#39;) : elements;
  }

    &#47;**
   * Returns the data associated to the given document
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Object} An object of data.
   *&#47;
  function getExpandoData(ownerDocument) {
    var data = expandoData&#91;ownerDocument&#91;expando&#93;&#93;;
    if (!data) {
        data = {};
        expanID++;
        ownerDocument&#91;expando&#93; = expanID;
        expandoData&#91;expanID&#93; = data;
    }
    return data;
  }

  &#47;**
   * returns a shived element for the given nodeName and document
   * @memberOf html5
   * @param {String} nodeName name of the element
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived element.
   *&#47;
  function createElement(nodeName, ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if (!data) {
        data = getExpandoData(ownerDocument);
    }
    var node;

    if (data.cache&#91;nodeName&#93;) {
        node = data.cache&#91;nodeName&#93;.cloneNode();
    } else if (saveClones.test(nodeName)) {
        node = (data.cache&#91;nodeName&#93; = data.createElem(nodeName)).cloneNode();
    } else {
        node = data.createElem(nodeName);
    }

    &#47;&#47; Avoid adding some elements to fragments in IE &lt; 9 because
    &#47;&#47; * Attributes like `name` or `type` cannot be set&#47;changed once an element
    &#47;&#47;   is inserted into a document&#47;fragment
    &#47;&#47; * Link elements with `src` attributes that are inaccessible, as with
    &#47;&#47;   a 403 response, will cause the tab&#47;window to crash
    &#47;&#47; * Script elements appended to fragments will execute when their `src`
    &#47;&#47;   or `text` property is set
    return node.canHaveChildren &#038;&#038; !reSkip.test(nodeName) &#038;&#038; !node.tagUrn ? data.frag.appendChild(node) : node;
  }

  &#47;**
   * returns a shived DocumentFragment for the given document
   * @memberOf html5
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived DocumentFragment.
   *&#47;
  function createDocumentFragment(ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
    for(;i&lt;l;i++){
        clone.createElement(elems&#91;i&#93;);
    }
    return clone;
  }

  &#47;**
   * Shivs the `createElement` and `createDocumentFragment` methods of the document.
   * @private
   * @param {Document|DocumentFragment} ownerDocument The document.
   * @param {Object} data of the document.
   *&#47;
  function shivMethods(ownerDocument, data) {
    if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
    }


    ownerDocument.createElement = function(nodeName) {
      &#47;&#47;abort shiv
      if (!html5.shivMethods) {
          return data.createElem(nodeName);
      }
      return createElement(nodeName, ownerDocument, data);
    };

    ownerDocument.createDocumentFragment = Function(&#39;h,f&#39;, &#39;return function(){&#39; +
      &#39;var n=f.cloneNode(),c=n.createElement;&#39; +
      &#39;h.shivMethods&#038;&#038;(&#39; +
        &#47;&#47; unroll the `createElement` calls
        getElements().join().replace(&#47;&#91;\w\-:&#93;+&#47;g, function(nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return &#39;c(&#34;&#39; + nodeName + &#39;&#34;)&#39;;
        }) +
      &#39;);return n}&#39;
    )(html5, data.frag);
  }

  &#47;*--------------------------------------------------------------------------*&#47;

  &#47;**
   * Shivs the given document.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   *&#47;
  function shivDocument(ownerDocument) {
    if (!ownerDocument) {
        ownerDocument = document;
    }
    var data = getExpandoData(ownerDocument);

    if (html5.shivCSS &#038;&#038; !supportsHtml5Styles &#038;&#038; !data.hasCSS) {
      data.hasCSS = !!addStyleSheet(ownerDocument,
        &#47;&#47; corrects block display not defined in IE6&#47;7&#47;8&#47;9
        &#39;article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}&#39; +
        &#47;&#47; adds styling not present in IE6&#47;7&#47;8&#47;9
        &#39;mark{background:#FF0;color:#000}&#39; +
        &#47;&#47; hides non-rendered elements
        &#39;template{display:none}&#39;
      );
    }
    if (!supportsUnknownElements) {
      shivMethods(ownerDocument, data);
    }
    return ownerDocument;
  }

  &#47;*--------------------------------------------------------------------------*&#47;

  &#47;**
   * The `html5` object is exposed so that more elements can be shived and
   * existing shiving can be detected on iframes.
   * @type Object
   * @example
   *
   * &#47;&#47; options can be changed before the script is included
   * html5 = { &#39;elements&#39;: &#39;mark section&#39;, &#39;shivCSS&#39;: false, &#39;shivMethods&#39;: false };
   *&#47;
  var html5 = {

    &#47;**
     * An array or space separated string of node names of the elements to shiv.
     * @memberOf html5
     * @type Array|String
     *&#47;
    &#39;elements&#39;: options.elements || &#39;abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video&#39;,

    &#47;**
     * current version of html5shiv
     *&#47;
    &#39;version&#39;: version,

    &#47;**
     * A flag to indicate that the HTML5 style sheet should be inserted.
     * @memberOf html5
     * @type Boolean
     *&#47;
    &#39;shivCSS&#39;: (options.shivCSS !== false),

    &#47;**
     * Is equal to true if a browser supports creating unknown&#47;HTML5 elements
     * @memberOf html5
     * @type boolean
     *&#47;
    &#39;supportsUnknownElements&#39;: supportsUnknownElements,

    &#47;**
     * A flag to indicate that the document&#39;s `createElement` and `createDocumentFragment`
     * methods should be overwritten.
     * @memberOf html5
     * @type Boolean
     *&#47;
    &#39;shivMethods&#39;: (options.shivMethods !== false),

    &#47;**
     * A string to describe the type of `html5` object (&#34;default&#34; or &#34;default print&#34;).
     * @memberOf html5
     * @type String
     *&#47;
    &#39;type&#39;: &#39;default&#39;,

    &#47;&#47; shivs the document according to the specified `html5` object options
    &#39;shivDocument&#39;: shivDocument,

    &#47;&#47;creates a shived element
    createElement: createElement,

    &#47;&#47;creates a shived documentFragment
    createDocumentFragment: createDocumentFragment
  };

  &#47;*--------------------------------------------------------------------------*&#47;

  &#47;&#47; expose html5
  window.html5 = html5;

  &#47;&#47; shiv the document
  shivDocument(document);

}(this, document));
</pre></p><p>Скрипт <strong>html5shiv.js</strong> довольно громоздкий т.к. в него по максимуму включена поддержка всевозможных элементов html5 для старых версий IE(6,7,8). Тем не менее, рекомендуется брать его за основу и переделывать под себя, оставляя только те html5 теги, которыми вы реально будете пользоваться на сайте.</p> </span><meta itemprop="name" content="html5shiv.js скрипт для поддержки старыми IE6,7,8 элементов html5"/><meta itemprop="author" content="Stijit"/><meta itemprop="image" content="http://www.stijit.com/wp-content/uploads/2014/03/html5shiv-js-ie-support.jpg"/><meta itemprop="datePublished" content="2014-03-13 23:24:04"/><meta itemprop="interactionCount" content="UserComments:0"/></div></div> </article><div class="widget"><h4 class="widgettitle">Читайте также:</h4><ul><li><a href="http://www.stijit.com/html-css/css-reset-erika-meyera" rel="bookmark" title="CSS reset Эрика Мейера &#8212; сброс стилей">CSS reset Эрика Мейера &#8212; сброс стилей</a></li><li><a href="http://www.stijit.com/html-css/coding-standards" rel="bookmark" title="Правила написания кода на HTML/CSS">Правила написания кода на HTML/CSS</a></li><li><a href="http://www.stijit.com/html-css/gmail-url-email-link-change" rel="bookmark" title="Как запретить gmail создавать ссылки из URL и email адресов">Как запретить gmail создавать ссылки из URL и email адресов</a></li><li><a href="http://www.stijit.com/html-css/emails-images" rel="bookmark" title="Стили для изображений в email рассылках">Стили для изображений в email рассылках</a></li></ul></div><section id="comment-wrap"><div id="comment-section" class="nocomments"></div><div id="respond" class="comment-respond"><h3 id="reply-title" class="comment-reply-title"><span>Оставить комментарий </span> <small><a rel="nofollow" id="cancel-comment-reply-link" href="/html-css/html5shiv-js-ie-support#respond" style="display:none;">Отменить ответ</a></small></h3><form action="http://www.stijit.com/wp-comments-post.php" method="post" id="commentform" class="comment-form"><p class="comment-notes"><span id="email-notes">Ваш e-mail не будет опубликован.</span> Обязательные поля помечены <span class="required">*</span></p><p class="comment-form-comment"><label for="comment">Комментарий</label><textarea id="comment" name="comment" cols="45" rows="8"  aria-required="true" required="required"></textarea></p><p class="comment-form-author"><label for="author">Имя <span class="required">*</span></label> <input id="author" name="author" type="text" value="" size="30" aria-required='true' required='required' /></p><p class="comment-form-email"><label for="email">E-mail <span class="required">*</span></label> <input id="email" name="email" type="text" value="" size="30" aria-describedby="email-notes" aria-required='true' required='required' /></p><p class="comment-form-url"><label for="url">Сайт</label> <input id="url" name="url" type="text" value="" size="30" /></p><p class="form-submit"><input name="submit" type="submit" id="submit" class="submit" value="Оставить комментарий " /> <input type='hidden' name='comment_post_ID' value='622' id='comment_post_ID' /> <input type='hidden' name='comment_parent' id='comment_parent' value='0' /></p><p style="display: none;"><input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" value="841f12b36b" /></p><p class="wysija-after-comment"><label for="wysija-box-after-comment"><input type="checkbox" id="wysija-box-after-comment" value="1" name="wysija[comment_subscribe]">Да, добавьте меня в список рассылки новых статей</label></p><p style="display: none;"><input type="hidden" id="ak_js" name="ak_js" value="131"/></p></form></div> </section></div><div id="sidebar"><div id="wysija-2" class="widget widget_wysija"><h4 class="widgettitle">Подпишитесь на нашу рассылку</h4><div class="widget_wysija_cont"><div id="msg-form-wysija-2" class="wysija-msg ajax"></div><form id="form-wysija-2" method="post" action="#wysija" class="widget_wysija"><p class="wysija-paragraph"> <input type="text" name="wysija[user][email]" class="wysija-input validate[required,custom[email]]" title="Email" placeholder="Email" value="" /> <span class="abs-req"> <input type="text" name="wysija[user][abs][email]" class="wysija-input validated[abs][email]" value="" /> </span></p> <input class="wysija-submit wysija-submit-field" type="submit" value="Подписаться" /><input type="hidden" name="form_id" value="1" /> <input type="hidden" name="action" value="save" /> <input type="hidden" name="controller" value="subscribers" /> <input type="hidden" value="1" name="wysija-page" /> <input type="hidden" name="wysija[user_list][list_ids]" value="1" /></form></div></div><div id="recent-posts-2" class="widget widget_recent_entries"><h4 class="widgettitle">Свежие записи</h4><ul><li> <a href="http://www.stijit.com/auto-tests/install-google-chrome-ubuntu-linux">How to install Google Chrome 49 on Ubuntu Linux</a></li><li> <a href="http://www.stijit.com/auto-tests/install-old-version-google-chrome-mac">How to install the old version of Google Chrome on Mac OS X</a></li><li> <a href="http://www.stijit.com/web-tips/months-year-english-russian-ukrainian">Months in English, Russian and Ukrainian</a></li><li> <a href="http://www.stijit.com/git/show-git-branch-colours-terminal-mac">How to show git branch in terminal and change terminal colours</a></li><li> <a href="http://www.stijit.com/auto-tests/protractor-test-automation-framework">Protractor test automation framework</a></li></ul></div></div></div><script type="text/javascript">function $(id){return!id?null:document.getElementById(id);}
loadPrettifyCss=function(){if(!$('prettify_css')){css=document.createElement('link');css.id='prettify_css';css.type='text/css';css.rel='stylesheet';css.href="http://www.stijit.com/wp-content/plugins/wp-code-prettify/css/sunburst.css?fcae6a";var headNode=document.getElementsByTagName("head")[0];headNode.appendChild(css);}else{$('prettify_css').href="http://www.stijit.com/wp-content/plugins/wp-code-prettify/css/sunburst.css?fcae6a";}
if(!$('prettify_custom')){css=document.createElement('style');css.id='prettify_custom';css.type='text/css';css.rel='stylesheet';css.innerHTML='pre.prettyprint { margin: 5px; padding: 10px; max-height: 600px; overflow: auto; background-color: #333333;} pre .kwd { color: #ff6347;} pre .str { color: #f0e68c;} pre .atv { color: #f0e68c;} pre .atn { color: #aaf200;} pre .tag { color: #f08080;}';var headNode=document.getElementsByTagName("head")[0];headNode.appendChild(css);}else{$('prettify_css').innerHTML='pre.prettyprint { margin: 5px; padding: 10px; max-height: 600px; overflow: auto; background-color: #333333;} pre .kwd { color: #ff6347;} pre .str { color: #f0e68c;} pre .atv { color: #f0e68c;} pre .atn { color: #aaf200;} pre .tag { color: #f08080;}';}}</script><script type="text/javascript">loadPrettifyCss();</script><script type="text/javascript" src="http://www.stijit.com/wp-content/cache/minify/000000/M9QvL9BNzk9J1S0oSi0pyUyr1M8q1oexAQ.js?fcae6a"></script><script type="text/javascript">function wpCodePrettifyOnLoad(func){var wpCodePrettifyOldOnLoad=window.onload;if(typeof window.onload!='function'){window.onload=func}else{window.onload=function(){wpCodePrettifyOldOnLoad();func()}}}
wpCodePrettifyOnLoad(function(){prettyPrint();});</script></div></div> <footer id="main-footer"><div class="container"><div id="footer-widgets" class="clearfix"></div></div> </footer><div id="footer-bottom"><div class="container clearfix"><ul id="bottom-menu" class="bottom-nav"><li id="menu-item-893" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-893"><a href="http://www.stijit.com/auto-tests">Auto tests</a></li><li id="menu-item-348" class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-348"><a href="http://www.stijit.com/html-css">HTML/CSS</a></li><li id="menu-item-349" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-349"><a href="http://www.stijit.com/javascript">JavaScript</a></li><li id="menu-item-347" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-347"><a href="http://www.stijit.com/git">Git</a></li><li id="menu-item-350" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-350"><a href="http://www.stijit.com/sem-seo">SEM</a></li><li id="menu-item-646" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-646"><a href="http://www.stijit.com/web-analytics">Analytics</a></li><li id="menu-item-346" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-346"><a href="http://www.stijit.com/emails-marketing">Email marketing</a></li><li id="menu-item-351" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-351"><a href="http://www.stijit.com/web-tips">Web tips</a></li></ul><p id="copyright">© 2011-2016 Источник: <a href="https://plus.google.com/100084467739420579531?rel=author">Stijit</a></p></div></div> <script type="text/javascript" src="http://www.stijit.com/wp-content/cache/minify/000000/nY1bCsIwEEU31GQsdhnuocRkUqfNy8xE2t2LQoWCH-LnfZ3bg1mIIwqMlCz4XGN3gkuz5HqYGbgVrJ74dnDne8O6aR9w5UAOq4qUvjZIHuT4ENnGkmM3gM0xYhJVsYRNHwhYTMIAxUw4CsYSjCC_xt4ku13zuh-gYUqT6vVZF2OXPwi7fjOGXykoqnwM5WtOgsk9AQ.js?fcae6a"></script><script type="text/javascript" src="http://www.stijit.com/wp-content/cache/minify/000000/M9EvL9BNzU1KTdHLzcwDAA.js?fcae6a"></script><script type="text/javascript" src="http://www.stijit.com/wp-content/cache/minify/000000/M9QvryzOzErUzUstL85JLSlJLSrWzyrWL0vMyUxJLEnVz0nMSy9NTE8FihaWphZV6kFlMvPzXPPSM_NSdYtKdQwJmYJDLwA.js?fcae6a"></script><script type='text/javascript'>var wysijaAJAX={"action":"wysija_ajax","controller":"subscribers","ajaxurl":"http:\/\/www.stijit.com\/wp-admin\/admin-ajax.php","loadingTrans":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...","is_rtl":""};</script><script type="text/javascript" src="http://www.stijit.com/wp-content/cache/minify/000000/M9QvryzOzErUzUstL85JLSlJLSrWzyrWTyvKzyvRLS5NKk4uykwCCgIA.js?fcae6a"></script></body></html>