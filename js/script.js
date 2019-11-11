$(function  () {
    var $title = $('.header-title')
    var $subtitle = $('.header-subtitle');
    var $p1 = $('.p1');
    var $p2 = $('.p2');
    var $btn1 = $('.btn1');
    var $btn2 = $('.btn2');
    var $btn3 = $('.btn3');
    var $btn4 = $('.btn4');

    console.log($subtitle);

    $($title).html('WEBSITE FOR TRADERS');
    $($subtitle).html('Welcome to this web-site. It is a special web-site for traders. Here you can find best advises and structures for trading and a lot of other interesting information.')
    $($p1).html('All materials presented on our website for traders are absolutely free. We will not ask you to buy anything from us, we will not impose paid services on you or extort your money in any other way.');
    $($p2).html('Since the majority of visitors to our site for traders are new to the foreign exchange market, a lot of information is focused on them. At the same time, this does not mean that currency trading professionals will not be interested in our site. Perhaps you will find something interesting for yourself in the sections on trading strategies and trading indicators. Or discover new interesting investment options. Etc.');

    $($btn1).click(function  () {
        $('.extra').html('');

        $($title).html('WEBSITE FOR TRADERS');
        $($subtitle).html('Welcome to this web-site. It is a special web-site for traders. Here you can find best advises and structures for trading and a lot of other interesting information.')
        $($p1).html('All materials presented on our website for traders are absolutely free. We will not ask you to buy anything from us, we will not impose paid services on you or extort your money in any other way.');
        $($p2).html('Since the majority of visitors to our site for traders are new to the foreign exchange market, a lot of information is focused on them. At the same time, this does not mean that currency trading professionals will not be interested in our site. Perhaps you will find something interesting for yourself in the sections on trading strategies and trading indicators. Or discover new interesting investment options. Etc.');

    })
    
    $($btn2).click(function  () {
        $('.extra').html('<h2 class="br-list">BROKERS LIST</h2> <ul class="br-ul row"> <li><a target="_blank" href="https://alpari.com/ru/">Alpari</a></li> <li><a target="_blank" href="https://www.npbfx.org/">NPBFX</a></li> <li><a target="_blank" href="https://www.intrade.bar/">Intrade.bar</a></li> </ul>');

        $($title).html('BROKERS YOU MIGHT LIKE');
        $($subtitle).html('Below you will see our selection of the best Forex brokers of 2019. Actually, only those organizations with which we cooperate and which, in our opinion, are the most optimal choice for almost any Russian-speaking trader are represented here. Each of these Forex brokers has its own specifics; it will be reflected in this description. So, lets get started')
        $($p1).html('Choosing one or another Forex broker, in addition to familiarizing yourself with its trading conditions and the list of services provided, we without fail study the feedback about it from real traders who had business with it. However, unfortunately, it is far from always possible to make an adequate impression of a particular organization on the basis of reviews in connection with a large percentage of “custom” publications aimed at artificially raising (or lowering) a broker in various ratings.')
        $($p2).html('The decisive factor, whatever one may say, is the direct experience with this broker. The speed and hassle-free withdrawal of funds, the absence of unnecessary technical problems, the adequacy of the support service - these are perhaps the primary signs of the best Forex broker. At the time of 2019, according to our observations, the organizations described above are most consistent with such criteria.</p>  ')
    })

    $($btn3).click(function () {
        $($title).html('ADVICES FROM EXPERTS');
        $($subtitle).html('This page contains the best trading advisors with which you can automatically trade in the foreign exchange market. We try to keep the information up to date, therefore we regularly monitor the results of using recommended trading advisers and, if possible, provide links to discuss these programs on the Internet.')
        $($p1).html('Survivor. A feature of this trading adviser is the so-called “hybridity”, that is, the fact that the basis of its work is not one, but several trading strategies. Actually, trading is carried out according to the channel trend strategy, as well as using a grid of orders.')
        $($p2).html('Benefit. A rather dangerous trading adviser using the Martingale principle. However, it is well suited for "dispersal" of the deposit. If you use it exclusively for “your own needs”, that is, not to “disperse” your trading account and show sky-high profitability on it, to start taking investor funds into management, but simply to steadily increase your personal capital , then using this trading advisor, you should regularly withdraw profit, as when using Martingale, from time to time a "drain" of the deposit is inevitable. In general, with proper use and with not too much risk, Benefit may well be profitable for the trader. </p>')
        $('.extra').html('<p class="p3">"The destroyer." Actually, this is not the name of the adviser. As such, it does not have an official name. The development of one of the forum participants forexdengi.com, aimed at removing the trading account from the drawdown that was “affected” by the use of other advisers or unsuccessful trading strategies. The main task of this trading adviser is to reduce the drawdown and close all orders that were opened by other advisors or manually. At the same time, the functions of regular trading are added to it, so this adviser is also the main tool for earning.</p>')
    })

    $($btn4).click(function () {
        $('.extra').html('');
        $($title).html('SPECIAL SUGGESTIONS');
        $($subtitle).html('This page summarizes the best investment offers known to us that broker and other organizations can offer.')
        $($p1).html('"PAMM" In our opinion, in the best possible way, this service was provided by the Alpari Forex broker. First of all, it is here that the most successful managers trade. In addition, the rating of PAMM portfolios is arranged in the most convenient way, allowing you to carefully evaluate all sorts of parameters and dynamics of portfolio returns. You can go to the rating of PAMM portfolios at this link.')
        $($p2).html('"ETF" In essence, an ETF is an open-end investment fund that is freely traded on a stock exchange. The fund buys assets on the basis of belonging to a sector, industry or the market as a whole (for example, the stock owned by the fund may copy the S & P500 index; or the stock may contain shares of gold mining companies; or the biotechnology stock fund, etc. etc., etc.).')
    })
})