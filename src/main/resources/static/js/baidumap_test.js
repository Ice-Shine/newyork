//初始化echarts,并和框体map绑定。
var myChart = echarts.init(document.getElementById('container'));

//手工写入的一个迁徙线的数据，正常项目中应该是由AJAX或其他方式来获取数据。
var linesdata = [
    {
        /*输入起始目的经纬度*/
        coords: [
            [ -74.00277668 , 40.76087502],
            [-73.98192338 , 40.7652654]
        ]
    },
    {

        coords: [
            [-74.00277668 , 40.76087502],
            [-73.98888587951659 , 40.777507027547976]
        ]
    },



];

const data = [
    { name: '海门', value: 9 },
    { name: '鄂尔多斯', value: 12 },
    { name: '招远', value: 12 },
    { name: '舟山', value: 12 }
];
const geoCoordMap = {
    海门: [-73.94965589046478 , 40.78112229934166],
    鄂尔多斯: [-73.95399026 , 40.68216564],
    招远: [-73.9647628 , 40.68851534],
    舟山: [-73.98997825,40.72019576]

};
var points=[];
get(points, -73.96264403 , 40.71260486 ," S 3 St & Bedford Ave ");
get(points, -73.9647628 , 40.68851534 ," Lafayette Ave & St James Pl ");
get(points, -73.9564947 , 40.6741806 ," Park Pl & Franklin Ave ");
get(points, -73.95399026 , 40.68216564 ," Hancock St & Bedford Ave ");
get(points, -74.01234218 , 40.70122128 ," South St & Whitehall St ");
get(points, -73.98562431335449 , 40.78057799010334 ," Riverside Dr & W 72 St ");
get(points, -73.9979009 , 40.75660359 ," W 37 St & 10 Ave ");
get(points, -73.99193043 , 40.71173107 ," Pike St & Monroe St ");
get(points, -73.94965589046478 , 40.78112229934166 ," E 91 St & 2 Ave ");
get(points, -73.9142678 , 40.7595701 ," Newton Rd & 44 St ");
get(points, -73.96784384 , 40.75206862 ," E 47 St & 1 Ave ");
get(points, -73.893 , 40.845 ," NULL ");
get(points, -73.98888587951659 , 40.777507027547976 ," Riverside Blvd & W 67 St ");
get(points, -73.893 , 40.854 ," NULL ");
get(points, -74.00413691997528 , 40.74294891660091 ," W 17 St & 9 Ave ");
get(points, -73.97121214 , 40.744219 ," FDR Drive & E 35 St ");
get(points, -73.944507 , 40.715143 ," Graham Ave & Conselyea St ");
get(points, -73.95324736833572 , 40.814394437915816 ," W 129 St & Convent Ave ");
get(points, -73.979382 , 40.688226 ," Fulton St & Rockwell Pl ");
get(points, -73.95772297 , 40.77112927 ," E 75 St & 3 Ave ");
get(points, -73.96069399 , 40.7781314 ," Madison Ave & E 82 St ");
get(points, -74.00412082672119 , 40.7252556952547 ," 6 Ave & Spring St ");
get(points, -74.00935515761375 , 40.71334184275907 ," Park Pl & Church St ");
get(points, -73.9787282 , 40.6740886 ," Carroll St & 6 Ave ");
get(points, -73.9538746 , 40.6630619 ," Rogers Ave & Sterling St ");
get(points, -73.9432635 , 40.74718234 ," 44 Dr & Jackson Ave ");
get(points, -73.98379855 , 40.72621788 ," E 7 St & Avenue A ");
get(points, -74.01472628116608 , 40.6758329439129 ," Van Brunt St & Van Dyke St ");
get(points, -73.96563307 , 40.68650065 ," Washington Ave & Greene Ave ");
get(points, -73.9671457 , 40.6740123 ," Underhill Ave & Lincoln Pl ");
get(points, -74.00247214 , 40.71939226 ," Lispenard St & Broadway ");
get(points, -73.960876 , 40.710451 ," S 5 Pl & S 5 St ");
get(points, -73.9646795 , 40.6804836 ," Underhill Ave & Pacific St ");
get(points, -73.98672670125961 , 40.701403172577244 ," Jay St & York St ");
get(points, -73.98025184869766 , 40.754120810779256 ," E 43 St & 5 Ave ");
get(points, -73.950916 , 40.6883337 ," Greene Ave & Nostrand Ave ");
get(points, -73.956461 , 40.813358 ," Amsterdam Ave & W 125 St ");
get(points, -73.9170074 , 40.7711528 ," 31 St & Hoyt Ave N ");
get(points, -73.9813018 , 40.69196566 ," Willoughby St & Fleet St ");
get(points, -73.98338988 , 40.75038009 ," W 37 St & 5 Ave ");
get(points, -73.96922273 , 40.68415748 ," Fulton St & Clermont Ave ");
get(points, -73.971518 , 40.766368 ," 5 Ave & E 63 St ");
get(points, -73.98997825 , 40.72019576 ," Allen St & Rivington St ");
get(points, -73.97634151 , 40.76590936 ," Central Park S & 6 Ave ");
get(points, -73.9786517 , 40.7829391 ," Amsterdam Ave & W 79 St ");
get(points, -73.959223 , 40.759107 ," E 60 St & York Ave ");
get(points, -74.04281705617905 , 40.71458403535893 ," Marin Light Rail ");
get(points, -73.9912551 , 40.76019252 ," 9 Ave & W 45 St ");
get(points, -73.99974372 , 40.71602118 ," Bayard St & Baxter St ");
get(points, -73.9504154 , 40.72179134 ," Driggs Ave & Lorimer St ");
get(points, -73.955736 , 40.724055 ," N 15 St & Wythe Ave ");
get(points, -73.9309134 , 40.7739825 ," 27 Ave & 9 St ");
get(points, -73.99331394 , 40.6724811 ," 2 Ave & 9 St ");
get(points, -73.97667321 , 40.78524672 ," Amsterdam Ave & W 82 St ");
get(points, -74.00612572 , 40.70530954 ," Front St & Maiden Ln ");
get(points, -73.94100005 , 40.71247661 ," Bushwick Ave & Powers St ");
get(points, -73.98432695 , 40.6802133 ," Douglass St & 3 Ave ");
get(points, -73.94945003 , 40.7934337 ," E 106 St & Madison Ave ");
get(points, -73.99147535 , 40.72229346 ," Stanton St & Chrystie St ");
get(points, -73.94434 , 40.72557 ," Nassau Ave & Russell St ");
get(points, -73.98776323 , 40.71269042 ," Madison St & Clinton St ");
get(points, -73.94752621650696 , 40.724812564400175 ," Nassau Ave & Newell St ");
get(points, -73.98658032 , 40.75513557 ," Broadway & W 41 St ");
get(points, -73.94335788 , 40.75325964 ," 21 St & Queens Plaza North ");
get(points, -73.98093133 , 40.78339981 ," W 78 St & Broadway ");
get(points, -73.98199886 , 40.6662078 ," 10 St & 7 Ave ");
get(points, -73.9664492472 , 40.8008363 ," W 106 St & Amsterdam Ave ");
get(points, -73.986923 , 40.734232 ," E 15 St & 3 Ave ");
get(points, -73.98258555 , 40.6827549 ," Wyckoff St & 3 Ave ");
get(points, -73.97738662 , 40.7381765 ," E 25 St & 1 Ave ");
get(points, -74.00324957 , 40.6763744 ," Henry St & W 9 St ");
get(points, -73.939182 , 40.80756 ," E 128 St & Madison Ave ");
get(points, -74.01713445 , 40.70834698 ," West Thames St ");
get(points, -73.95095259 , 40.70877084 ," Stagg St & Union Ave ");
get(points, -73.993915 , 40.746647 ," W 27 St & 7 Ave ");
get(points, -73.96525063 , 40.71044554 ," Broadway & Berry St ");
get(points, -73.99461843 , 40.76009437 ," W 43 St & 10 Ave ");
get(points, -73.9550858 , 40.73232194 ," India St & Manhattan Ave ");
get(points, -73.9242751 , 40.7580583 ," 35 St & 34 Ave ");
get(points, -73.9737299 , 40.6917823 ," Washington Park ");
get(points, -73.97803415 , 40.69608941 ," Park Ave & St Edwards St ");
get(points, -73.95801365375519 , 40.694546087246025 ," Franklin Ave & Myrtle Ave ");
get(points, -73.95520135760307 , 40.71816969454208 ," Driggs Ave & N 9 St ");
get(points, -73.97431458 , 40.68539567 ," S Portland Ave & Hanson Pl ");
get(points, -73.9532423 , 40.802535 ," Adam Clayton Powell Blvd & W 115 St ");
get(points, -74.005549 , 40.717571 ," Leonard St & Church St ");
get(points, -73.9521667 , 40.7806284 ," E 89 St & 3 Ave ");
get(points, -73.9209334552288 , 40.7675487799971 ," 31 St & Newtown Ave ");
get(points, -73.96885458 , 40.68940747 ," DeKalb Ave & Vanderbilt Ave ");
get(points, -74.00234482 , 40.71494807 ," Centre St & Worth St ");
get(points, -74.00670227 , 40.70355377 ," South St & Gouverneur Ln ");
get(points, -74.01062786579132 , 40.65539977447831 ," 39 St & 2 Ave - Citi Bike HQ at Industry City ");
get(points, -73.99463653564453 , 40.66906013501107 ," NYCBS Depot - GOW ");
get(points, -73.97363831 , 40.668132 ," 3 St & Prospect Park West ");
get(points, -73.94885390996933 , 40.71915571696044 ," Bayard St & Leonard St ");
get(points, -73.97728532552719 , 40.7801839724239 ," W 76 St & Columbus Ave ");
get(points, -73.9460927 , 40.748 ," 44 Dr & 21 St ");
get(points, -74.0046073 , 40.71273266 ," Centre St & Chambers St ");
get(points, -74.01122331619263 , 40.714851505262516 ," Murray St & Greenwich St ");
get(points, -74.01275056 , 40.6773429 ," Van Brunt St & Wolcott St ");
get(points, -74.00870203971863 , 40.65708866668485 ," 2 Ave & 36 St - Citi Bike HQ at Industry City ");
get(points, -73.99906065 , 40.73047747 ," Sullivan St & Washington Sq ");
get(points, -73.96724467 , 40.76095756 ," E 58 St & 3 Ave ");
get(points, -73.98983001708984 , 40.67260298150126 ," 7 St & 3 Ave ");
get(points, -73.99238967 , 40.73726186 ," E 16 St & 5 Ave ");
get(points, -74.00194698 , 40.67434 ," Clinton St & Centre St ");
get(points, -73.98802084 , 40.7172274 ," Norfolk St & Broome St ");
get(points, -73.9432083 , 40.79329668 ," E 109 St & 3 Ave ");
get(points, -73.98362464 , 40.69474881 ," Johnson St & Gold St ");
get(points, -74.01129573583603 , 40.7277140777778 ," Pier 40 - Hudson River Park ");
get(points, -73.98765762 , 40.70281858 ," Pearl St & Anchorage Pl ");
get(points, -73.95394 , 40.73026 ," Greenpoint Ave & Manhattan Ave ");
get(points, -74.008119 , 40.739323 ," Washington St & Gansevoort St ");
get(points, -73.934171 , 40.770845 ," Vernon Blvd & 30 Rd ");
get(points, -73.99046033620834 , 40.77149671054441 ," 11 Ave & W 59 St ");
get(points, -73.988038 , 40.770513 ," W 59 St & 10 Ave ");
get(points, -73.99069656 , 40.72502876 ," E 2 St & 2 Ave ");
get(points, -74.00785041 , 40.6794327 ," Richards St & Delavan St ");
get(points, -74.00562789 , 40.71450451 ," Reade St & Broadway ");
get(points, -74.00297088 , 40.72710258 ," MacDougal St & Prince St ");
get(points, -73.98808416 , 40.74854862 ," Broadway & W 32 St ");
get(points, -73.9322662 , 40.7682 ," 31 Ave & 14 St ");
get(points, -74.00653609 , 40.70955958 ," Fulton St & William St ");
get(points, -73.93756926 , 40.69681963 ," Myrtle Ave & Lewis Ave ");
get(points, -73.9870295 , 40.71559509 ," Clinton St & Grand St ");
get(points, -74.0016256 , 40.68763155 ," Columbia St & Kane St ");
get(points, -73.98266566 , 40.77492513 ," W 67 St & Broadway ");
get(points, -73.92957486212252 , 40.75651272984955 ," 36 Ave & 31 St ");
get(points, -73.96699104 , 40.804213 ," Cathedral Pkwy & Broadway ");
get(points, -74.011169 , 40.679043 ," Pioneer St & Van Brunt St ");
get(points, -73.971888 , 40.7937704 ," W 95 St & Broadway ");
get(points, -73.95928168 , 40.68676793 ," Lexington Ave & Classon Ave ");
get(points, -73.957145 , 40.801694 ," Frederick Douglass Blvd & W 112 St ");
get(points, -73.95772073 , 40.77862688 ," E 84 St & Park Ave ");
get(points, -74.01043382 , 40.70905623 ," Liberty St & Broadway ");
get(points, -73.9240312 , 40.7647 ," 31 Ave & 30 St ");
get(points, -73.99851193 , 40.71307916 ," St James Pl & Oliver St ");
get(points, -73.936322 , 40.805726 ," Lexington Ave & E 127 St ");
get(points, -73.95242 , 40.71924 ," Union Ave & N 12 St ");
get(points, -73.99884222 , 40.76030096 ," 11 Ave & W 41 St ");
get(points, -73.9544353965357 , 40.70684203101325 ," Division Av & Hooper St ");
get(points, -73.93705428 , 40.69237074 ," Lewis Ave & Kosciuszko St ");
get(points, -73.94860294 , 40.7859201 ," E 97 St & 3 Ave ");
get(points, -74.00234737 , 40.72165481 ," Grand St & Greene St ");
get(points, -73.990539 , 40.69383 ," Cadman Plaza West & Montague St ");
get(points, -73.99596 , 40.718822 ," Grand St & Elizabeth St ");
get(points, -73.9500739 , 40.8011939 ," Lenox Ave & W 115 St ");
get(points, -73.930562 , 40.76108 ," Crescent St & 34 Ave ");
get(points, -73.9535166 , 40.77140426 ," 1 Ave & E 78 St ");
get(points, -73.99344559 , 40.69760127 ," Clark St & Henry St ");
get(points, -73.902 , 40.863 ," NULL ");
get(points, -74.00618026 , 40.73652889 ," Bank St & Hudson St ");
get(points, -73.97484126 , 40.6711978 ," Garfield Pl & 8 Ave ");
get(points, -73.97283406 , 40.78499979 ," W 84 St & Columbus Ave ");
get(points, -73.96063148975372 , 40.70924826276157 ," Broadway & Roebling St ");
get(points, -73.94984364509583 , 40.7239567849954 ," Leonard St & Nassau Ave ");
get(points, -73.98517977 , 40.72066442 ," Suffolk St & Stanton St ");
get(points, -73.9321455 , 40.7596276 ," Crescent St & 35 Ave ");
get(points, -73.945925 , 40.804038 ," Mt Morris Park W & W 120 St ");
get(points, -73.95881081 , 40.6845683 ," Monroe St & Classon Ave ");
get(points, -73.9643412291 , 40.7969347 ," Columbus Ave & W 103 St ");
get(points, -73.944118 , 40.6823687 ," Halsey St & Tompkins Ave ");
get(points, -73.97031366 , 40.75968085 ," E 55 St & Lexington Ave ");
get(points, -73.9574686 , 40.6642406 ," Sullivan Pl & Bedford Ave ");
get(points, -73.98194829 , 40.7457121 ," E 32 St & Park Ave ");
get(points, -73.9145645 , 40.7787185 ," Crescent St & Ditmars Blvd ");
get(points, -74.00242364 , 40.6859296 ," Columbia St & Degraw St ");
get(points, -73.941747 , 40.80698 ," 5 Ave & E 126 St ");
get(points, -73.9788007736206 , 40.747573958954796 ," Lexington Ave & E 36 St ");
get(points, -73.99800419 , 40.73532427 ," W 11 St & 6 Ave ");
get(points, -74.00647134 , 40.6769993 ," Columbia St & W 9 St ");
get(points, -73.9790689945221 , 40.7667405590595 ," 7 Ave & Central Park South ");
get(points, -73.9492286 , 40.8125511 ," Frederick Douglass Blvd & W 129 St ");
get(points, -74.00167 , 40.707873 ," Peck Slip & Front St ");
get(points, -73.940636 , 40.7031724 ," Humboldt St & Varet St ");
get(points, -73.976806 , 40.739445 ," E 27 St & 1 Ave ");
get(points, -73.96060712 , 40.7699426 ," 3 Ave & E 72 St ");
get(points, -73.97209525108337 , 40.76302594280519 ," E 58 St & Madison Ave ");
get(points, -74.0075572 , 40.6747055 ," Columbia St & Lorraine St ");
get(points, -73.9645 , 40.795 ," W 100 St & Manhattan Ave ");
get(points, -73.98876585 , 40.6705135 ," 4 Ave & 9 St ");
get(points, -73.9631145 , 40.6716493 ," Eastern Pkwy & Washington Ave ");
get(points, -73.9479119 , 40.7519071 ," 11 St & 43 Ave ");
get(points, -73.95427465438843 , 40.774779448957275 ," E 81 St & 2 Ave ");
get(points, -73.98583620786667 , 40.72307749068673 ," E 2 St & Avenue A ");
get(points, -73.9383 , 40.7923272 ," 1 Ave & E 110 St ");
get(points, -73.99183362722397 , 40.69102925677968 ," Schermerhorn St & Court St ");
get(points, -73.9468208 , 40.7724607 ," E 82 St & East End Ave ");
get(points, -73.9077436 , 40.7713937 ," Steinway St & 23 Ave ");
get(points, -73.9946848154068 , 40.7505853470215 ," 8 Ave & W 31 St ");
get(points, -73.9588 , 40.6679411 ," Carroll St & Franklin Ave ");
get(points, -73.9842844 , 40.69221589 ," Duffield St & Willoughby St ");
get(points, -73.95840793848038 , 40.7687620293096 ," 2 Ave & E 72 St ");
get(points, -73.9396861 , 40.8045555 ," Park Ave & E 124 St ");
get(points, -73.97898475 , 40.7770575 ," Columbus Ave & W 72 St ");
get(points, -73.98383796215057 , 40.71690978045965 ," 58th St Depot ");
get(points, -73.99200509 , 40.73492695 ," University Pl & E 14 St ");
get(points, -73.947915 , 40.6900815 ," Marcy Ave & Lafayette Ave ");
get(points, -73.993934 , 40.751551 ," 8 Ave & W 33 St ");
get(points, -73.9823305606842 , 40.71644423134479 ," NYCBS DEPOT - DELANCEY ");
get(points, -73.9641 , 40.8082 ," W 116 St & Broadway ");
get(points, -73.98165557 , 40.73221853 ," 1 Ave & E 16 St ");
get(points, -73.97648516 , 40.75992262 ," W 52 St & 5 Ave ");
get(points, -73.98751968 , 40.73827428 ," E 20 St & Park Ave ");
get(points, -73.9265474 , 40.7658346 ," 31 Ave & Crescent St ");
get(points, -73.98368779 , 40.72217444 ," E 2 St & Avenue B ");
get(points, -74.001384973526 , 40.741021509002664 ," W 16 St & 8 Ave ");
get(points, -73.99379025 , 40.72743423 ," Great Jones St ");
get(points, -73.9518776 , 40.8114323 ," St. Nicholas Ave & W 126 St ");
get(points, -73.9681805305 , 40.8021174 ," West End Ave & W 107 St ");
get(points, -73.97573881 , 40.73314259 ," E 20 St & FDR Drive ");
get(points, -73.99949601 , 40.72362738 ," Mercer St & Spring St ");
get(points, -73.98093044757842 , 40.77966809007312 ," Amsterdam Ave & W 73 St ");
get(points, -73.881 , 40.857 ," NULL ");
get(points, -73.98303529 , 40.74444921 ," E 30 St & Park Ave S ");
get(points, -73.97129668 , 40.69573398 ," Clermont Ave & Park Ave ");
get(points, -73.952029 , 40.7160751 ," Union Ave & Jackson St ");
get(points, -73.99785267 , 40.6831164 ," Clinton St & Union St ");
get(points, -73.94485918 , 40.7169811 ," Graham Ave & Withers St ");
get(points, -73.9567526 , 40.77573034 ," E 81 St & 3 Ave ");
get(points, -73.9342862 , 40.7628138 ," 34 Ave & 21 St ");
get(points, -73.939877 , 40.6933982 ," Pulaski St & Marcus Garvey Blvd ");
get(points, -73.9607082 , 40.8067581 ," W 116 St & Amsterdam Ave ");
get(points, -73.9347774 , 40.7668 ," Broadway & 12 St ");
get(points, -73.99599099 , 40.6787242 ," Smith St & 3 St ");
get(points, -73.97077560424805 , 40.697950315695444 ," Flushing Ave & Vanderbilt Ave ");
get(points, -73.97790759801863 , 40.68506807308177 ," Hanson Pl & Ashland Pl ");
get(points, -73.9609 , 40.6721683 ," Lincoln Pl & Classon Ave ");
get(points, -73.98631746 , 40.69236178 ," Lawrence St & Willoughby St ");
get(points, -73.97265183 , 40.68753406 ," Cumberland St & Lafayette Ave ");
get(points, -73.974124 , 40.7941654 ," West End Ave & W 94 St ");
get(points, -74.00552427 , 40.71146364 ," Spruce St & Nassau St ");
get(points, -73.95212324 , 40.72311651 ," Bedford Ave & Nassau Ave ");
get(points, -73.9236611 , 40.7557327 ," 35 Ave & 37 St ");
get(points, -73.96223558 , 40.69363137 ," Emerson Pl & Myrtle Ave ");
get(points, -73.9900262 , 40.75640548 ," W 41 St & 8 Ave ");
get(points, -73.921631 , 40.756913 ," 34 Ave & 38 St ");
get(points, -73.96186 , 40.795346 ," Central Park West & W 102 St ");
get(points, -73.99098507 , 40.7575699 ," W 42 St & 8 Ave ");
get(points, -73.99102628231049 , 40.73020660529954 ," Lafayette St & E 8 St ");
get(points, -73.95249933 , 40.7922553 ," 5 Ave & E 103 St ");
get(points, -73.9246145 , 40.7713615 ," Newtown Ave & 23 St ");
get(points, -73.99595065 , 40.69512845 ," Hicks St & Montague St ");
get(points, -73.96930575370789 , 40.75763227739443 ," E 53 St & 3 Ave ");
get(points, -73.97995466 , 40.72299208 ," E 5 St & Avenue C ");
get(points, -73.98918628692627 , 40.74286877312112 ," Broadway & W 25 St ");
get(points, -73.99973337 , 40.71910537 ," Howard St & Centre St ");
get(points, -73.97982001304626 , 40.76132983124814 ," W 52 St & 6 Ave ");
get(points, -73.99158043 , 40.73261787 ," E 11 St & Broadway ");
get(points, -73.94977 , 40.68402 ," Putnam Ave & Nostrand Ave ");
get(points, -73.98261206 , 40.71622644 ," Bialystoker Pl & Delancey St ");
get(points, -73.97041192 , 40.7973721 ," W 100 St & Broadway ");
get(points, -74.01677685 , 40.70569254 ," Little West St & 1 Pl ");
get(points, -74.00473035871983 , 40.724308321602166 ," 6 Ave & Broome St ");
get(points, -74.00507032871246 , 40.739448201304036 ," Gansevoort St & Hudson St ");
get(points, -73.99662137031554 , 40.72706363348306 ," Mercer St & Bleecker St ");
get(points, -73.953559 , 40.787801 ," E 97 St & Madison Ave ");
get(points, -73.954692 , 40.805159 ," Frederick Douglass Blvd & W 117 St ");
get(points, -73.99318208 , 40.6829151 ," Degraw St & Smith St ");
get(points, -73.99431 , 40.735445 ," W 13 St & 5 Ave ");
get(points, -74.00494695 , 40.6725058 ," Henry St & Bay St ");
get(points, -74.00026394 , 40.73224119 ," Washington Pl & 6 Ave ");
get(points, -73.95826 , 40.73266 ," Huron St & Franklin St ");
get(points, -73.94954908 , 40.69539817 ," Myrtle Ave & Marcy Ave ");
get(points, -73.98855723 , 40.7462009 ," Broadway & W 29 St ");
get(points, -73.962408 , 40.678045 ," Grand Ave & Bergen St ");
get(points, -73.989111 , 40.722055 ," Allen St & Stanton St ");
get(points, -73.9166368 , 40.7577284 ," 43 St & Broadway ");
get(points, -73.94776493310928 , 40.809495347779475 ," Adam Clayton Powell Blvd & W 126 St ");
get(points, -73.9590255 , 40.8143256 ," Broadway & Moylan Pl ");
get(points, -73.9618148 , 40.6686744 ," Carroll St & Washington Ave ");
get(points, -73.9711457439 , 40.8013434 ," Riverside Dr & W 104 St ");
get(points, -73.932719 , 40.757186 ," 28 St & 36 Ave ");
get(points, -73.93725872039794 , 40.74128309355993 ," 48 Ave & 30 Pl ");
get(points, -73.95779 , 40.72906 ," Milton St & Franklin St ");
get(points, -73.98797392845154 , 40.735367055605394 ," E 16 St & Irving Pl ");
get(points, -73.9389152 , 40.799139 ," E 118 St & 3 Ave ");
get(points, -73.962658 , 40.759125 ," E 58 St &  1 Ave (NW Corner) ");
get(points, -73.94977234 , 40.74708586 ," 45 Rd & 11 St ");
get(points, -73.94016171 , 40.70767788 ," Montrose Ave & Bushwick Ave ");
get(points, -74.008591 , 40.728846 ," Greenwich St & W Houston St ");
get(points, -73.97109243 , 40.76350532 ," E 59 St & Madison Ave ");
get(points, -73.94880026578903 , 40.71766197083994 ," Frost St & Meeker Ave ");
get(points, -73.9286471 , 40.7633589 ," Crescent St & Broadway ");
get(points, -73.94407279 , 40.70510918 ," McKibbin St & Manhattan Ave ");
get(points, -73.98470567 , 40.7746671 ," Amsterdam Ave & W 66 St ");
get(points, -73.981346 , 40.714215 ," Henry St & Grand St ");
get(points, -74.0021163 , 40.75594159 ," W 34 St & 11 Ave ");
get(points, -73.99074142 , 40.73454567 ," Broadway & E 14 St ");
get(points, -73.9558732509613 , 40.744363287066875 ," 48 Ave & 5 St ");
get(points, -74.002950346 , 40.749717753 ," W 26 St & 10 Ave ");
get(points, -73.99994661 , 40.73781509 ," W 13 St & 7 Ave ");
get(points, -73.97966069 , 40.74394314 ," E 31 St & 3 Ave ");
get(points, -73.99667444 , 40.76341379 ," W 46 St & 11 Ave ");
get(points, -73.94176483154297 , 40.7437524099784 ," 47 Ave & Skillman Ave ");
get(points, -74.00838676 , 40.7037992 ," Old Slip & Front St ");
get(points, -74.00214988 , 40.73038599 ," Carmine St & 6 Ave ");
get(points, -73.99400398 , 40.71076228 ," Market St & Cherry St ");
get(points, -73.981013 , 40.689888 ," DeKalb Ave & Hudson Ave ");
get(points, -73.94755757 , 40.7903051 ," E 103 St & Lexington Ave ");
get(points, -73.99301222 , 40.76269882 ," W 47 St & 10 Ave ");
get(points, -73.9612547 , 40.8120562 ," Broadway & W 122 St ");
get(points, -73.987167 , 40.695065 ," Jay St & Tech Pl ");
get(points, -73.98329859 , 40.71850211 ," Rivington St & Ridge St ");
get(points, -73.95234386 , 40.71413311 ," Metropolitan Ave & Meeker Ave ");
get(points, -73.98128127 , 40.78720869 ," Riverside Dr & W 82 St ");
get(points, -74.00398269295692 , 40.73756121181137 ," W 12 St & W 4 St ");
get(points, -73.93797 , 40.751047 ," 28 St & 41 Ave ");
get(points, -73.98304268717766 , 40.68962188790333 ," Bond St & Fulton St ");
get(points, -73.98352355 , 40.6728155 ," 5 Ave & 3 St ");
get(points, -73.94800901412964 , 40.721462562298164 ," Eckford St & Engert Ave ");
get(points, -73.99645295 , 40.6861758 ," Kane St & Clinton St ");
get(points, -74.009447 , 40.711066 ," Fulton St & Broadway ");
get(points, -74.000271 , 40.735238 ," Greenwich Ave & Charles St ");
get(points, -73.93504 , 40.79747 ," E 118 St & 1 Ave ");
get(points, -73.977112 , 40.7867947 ," W 84 St & Broadway ");
get(points, -73.96536851 , 40.69196035 ," Willoughby Ave & Hall St ");
get(points, -73.9419949 , 40.8005385 ," E 118 St & Park Ave ");
get(points, -74.00348559 , 40.6830456 ," Carroll St & Columbia St ");
get(points, -73.9373554 , 40.7671863 ," Vernon Blvd & 10 St ");
get(points, -73.97288918495178 , 40.79017948095081 ," W 90 St & Amsterdam Ave ");
get(points, -73.94594 , 40.7817212 ," 1 Ave & E 94 St ");
get(points, -73.99490341544151 , 40.73143724085228 ," University Pl & E 8 St ");
get(points, -74.015665 , 40.677236 ," Coffey St & Conover St ");
get(points, -73.99497985839844 , 40.66979964220026 ," Handlebar @ Gowanus ");
get(points, -73.98990025 , 40.71427487 ," Canal St & Rutgers St ");
get(points, -73.95512759685516 , 40.77755374298887 ," E 84 St & 3 Ave ");
get(points, -73.9337894 , 40.7747175 ," 27 Ave & 4 St ");
get(points, -73.9814832 , 40.6751622 ," Carroll St & 5 Ave ");
get(points, -73.97574813 , 40.72368361 ," Avenue D & E 8 St ");
get(points, -73.984844 , 40.713126 ," Madison St & Montgomery St ");
get(points, -73.97137 , 40.78275 ," W 82 St & Central Park West ");
get(points, -73.95482273 , 40.7689738 ," E 74 St & 1 Ave ");
get(points, -74.00004031 , 40.74345335 ," W 20 St & 8 Ave ");
get(points, -73.95380904 , 40.6851443 ," Monroe St & Bedford Ave ");
get(points, -73.9576801 , 40.6707767 ," Eastern Pkwy & Franklin Ave ");
get(points, -74.01322069 , 40.71754834 ," West St & Chambers St ");
get(points, -74.0094613 , 40.6777748 ," Pioneer St & Richards St ");
get(points, -73.9845272898674 , 40.76068327096592 ," Broadway & W 49 St ");
get(points, -74.01167797 , 40.70365182 ," Broad St & Bridge St ");
get(points, -73.99440329 , 40.6849894 ," Butler St & Court St ");
get(points, -73.96590294 , 40.71285887 ," S 4 St & Wythe Ave ");
get(points, -73.9349 , 40.8006721 ," 2 Ave & E 122 St ");
get(points, -73.96603308 , 40.75797322 ," E 55 St & 2 Ave ");
get(points, -73.94164802 , 40.7869946 ," E 102 St & 1 Ave ");
get(points, -73.938037 , 40.682601 ," Marcus Garvey Blvd & Macon St ");
get(points, -73.97988067 , 40.6686627 ," 6 St & 7 Ave ");
get(points, -73.99740189313889 , 40.754691750226016 ," W 35 St & Dyer Ave ");
get(points, -73.99520919 , 40.6881529 ," Congress St & Clinton St ");
get(points, -73.97567331790923 , 40.680944723477296 ," Bergen St & Flatbush Ave ");
get(points, -73.97041561 , 40.7882213 ," W 89 St & Columbus Ave ");
get(points, -73.9605695 , 40.66314 ," Franklin Ave & Empire Blvd ");
get(points, -73.98016555 , 40.71739973 ," Columbia St & Rivington St ");
get(points, -73.98700053 , 40.6686273 ," 10 St & 5 Ave ");
get(points, -73.923706 , 40.774645 ," 21 St & Hoyt Ave S ");
get(points, -73.95451 , 40.74731 ," 46 Ave & 5 St ");
get(points, -73.96751037 , 40.69610226 ," Washington Ave & Park Ave ");
get(points, -74.00747358798981 , 40.742753828659026 ," W 15 St & 10 Ave ");
get(points, -73.97718340158461 , 40.79025417330419 ," W 88 St & West End Ave ");
get(points, -74.00277668 , 40.76087502 ," 12 Ave & W 40 St ");
get(points, -73.99379968643188 , 40.75898481399634 ," W 42 St & Dyer Ave ");
get(points, -73.94968539476395 , 40.784596798848916 ," 3 Ave & E 95 St ");
get(points, -73.97493121 , 40.68981035 ," DeKalb Ave & S Portland Ave ");
get(points, -73.96961715 , 40.78472675 ," Central Park West & W 85 St ");
get(points, -73.96023854 , 40.68900443 ," Lafayette Ave & Classon Ave ");
get(points, -73.98765474557877 , 40.67909799721684 ," Union St & Nevins St ");
get(points, -73.98940236 , 40.70255088 ," Front St & Washington St ");
get(points, -73.98971773 , 40.69991755 ," Cadman Plaza E & Red Cross Pl ");
get(points, -73.938475 , 40.6800105 ," Albany Ave & Fulton St ");
get(points, -73.97628939 , 40.71782143 ," Stanton St & Mangin St ");
get(points, -73.96286845207214 , 40.79406660818552 ," Central Park West & W 100 St ");
get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
get(points, -73.9491033554077 , 40.71335226222875 ," Devoe St & Lorimer St ");
get(points, -73.96165072917938 , 40.72036775298455 ," Kent Ave & N 7 St ");
get(points, -73.99915362 , 40.74475148 ," W 22 St & 8 Ave ");
get(points, -73.95939 , 40.78307 ," 5 Ave & E 88 St ");
get(points, -73.97121414 , 40.75022392 ," E 43 St & 2 Ave ");
get(points, -73.934903 , 40.6814598 ," Lewis Ave & Decatur St ");
get(points, -74.00504082441329 , 40.70831794366396 ," Cliff St & Fulton St ");
get(points, -73.98859651 , 40.75929124 ," W 45 St & 8 Ave ");
get(points, -73.97950418293476 , 40.72746420692392 ," E 11 St & Avenue B ");
get(points, -73.9534573 , 40.7449067 ," Vernon Blvd & 47 Rd ");
get(points, -73.9286078 , 40.7703743 ," 30 Ave & 21 St ");
get(points, -73.9551508 , 40.81 ," Morningside Ave & W 123 St ");
get(points, -73.9225403 , 40.7774552 ," 19 St & 24 Ave ");
get(points, -73.98602213 , 40.74096374 ," E 24 St & Park Ave S ");
get(points, -73.97839676 , 40.6703837 ," 3 St & 7 Ave ");
get(points, -73.988639 , 40.768254 ," W 56 St & 10 Ave ");
get(points, -73.94989233 , 40.7728384 ," E 81 St & York Ave ");
get(points, -73.9490782 , 40.8025566 ," Lenox Ave & W 117 St ");
get(points, -73.98396846 , 40.663779 ," 14 St & 7 Ave ");
get(points, -73.99075269699097 , 40.72951496224949 ," Cooper Square & Astor Pl ");
get(points, -73.969024 , 40.6767 ," Park Pl & Vanderbilt Ave ");
get(points, -74.005226 , 40.751396 ," 11 Ave & W 27 St ");
get(points, -73.9120938 , 40.7701477 ," 37 St & 24 Ave ");
get(points, -74.01020234 , 40.71291224 ," Barclay St & Church St ");
get(points, -73.96703464 , 40.7691572 ," E 68 St & Madison Ave ");
get(points, -74.0335519 , 40.7141454 ," Paulus Hook ");
get(points, -73.94142771 , 40.67890679 ," Kingston Ave & Herkimer St ");
get(points, -73.98426726 , 40.72953837 ," E 11 St & 1 Ave ");
get(points, -73.9222427 , 40.760339 ," 35 St & Broadway ");
get(points, -74.0087952464819 , 40.67267243410948 ," Sigourney St & Columbia St ");
get(points, -73.956741 , 40.666563 ," Crown St & Bedford Ave ");
get(points, -73.97111473 , 40.6750207 ," Plaza St West & Flatbush Ave ");
get(points, -73.96592080593109 , 40.76780080148132 ," E 67 St & Park Ave ");
get(points, -73.97536082 , 40.74144387 ," 1 Ave & E 30 St ");
get(points, -73.98713956 , 40.7284186 ," St Marks Pl & 2 Ave ");
get(points, -74.00666661 , 40.71911552 ," Franklin St & W Broadway ");
get(points, -73.946041 , 40.7779453 ," E 89 St & York Ave ");
get(points, -73.97754961 , 40.7785669 ," W 74 St & Columbus Ave ");
get(points, -73.9311847 , 40.7974772 ," Pleasant Ave & E 120 St ");
get(points, -73.96592976 , 40.75455731 ," E 51 St & 1 Ave ");
get(points, -73.96649479866028 , 40.799041392882984 ," W 104 St & Amsterdam Ave ");
get(points, -73.99364123 , 40.6777287 ," 3 St & Hoyt St ");
get(points, -73.96845281124115 , 40.76800889305947 ," E 66 St & Madison Ave ");
get(points, -73.95032283 , 40.70029511 ," Union Ave & Wallabout St ");
get(points, -73.97355569 , 40.69580705 ," Carlton Ave & Park Ave ");
get(points, -73.95068615 , 40.77565541 ," E 84 St & 1 Ave ");
get(points, -74.00887308 , 40.70717936 ," William St & Pine St ");
get(points, -73.95736455917358 , 40.81028506306003 ," Morningside Dr & Amsterdam Ave ");
get(points, -73.96986848 , 40.69794 ," Clinton Ave & Flushing Ave ");
get(points, -73.97809472 , 40.736502 ," E 23 St & 1 Ave ");
get(points, -73.99061728 , 40.76669671 ," W 53 St & 10 Ave ");
get(points, -73.9488134 , 40.778301 ," E 88 St & 1 Ave ");
get(points, -73.9621128676 , 40.7997568 ," W 107 St & Columbus Ave ");
get(points, -73.99810231 , 40.72917025 ," LaGuardia Pl & W 3 St ");
get(points, -73.98288594 , 40.77748046 ," W 70 St & Amsterdam Ave ");
get(points, -73.98620772 , 40.6849668 ," Bond St & Bergen St ");
get(points, -73.95595908164978 , 40.781410700190015 ," E 88 St & Park Ave ");
get(points, -73.94111 , 40.6851532 ," Putnam Ave & Throop Ave ");
get(points, -73.97637605667114 , 40.66514681533792 ," Prospect Park West & 8 St ");
get(points, -73.93956237 , 40.7892529 ," E 106 St & 1 Ave ");
get(points, -73.94308 , 40.72325 ," Driggs Ave & N Henry St ");
get(points, -73.99726235 , 40.74238787 ," W 20 St & 7 Ave ");
get(points, -73.9362541 , 40.7945663 ," E 114 St & 1 Ave ");
get(points, -73.983293 , 40.741459 ," Lexington Ave & E 26 St ");
get(points, -73.99990419 , 40.6828003 ," President St & Henry St ");
get(points, -73.98564945 , 40.72779126 ," St Marks Pl & 1 Ave ");
get(points, -73.98014437 , 40.75500254 ," W 44 St & 5 Ave ");
get(points, -73.99852205 , 40.73226398 ," MacDougal St & Washington Sq ");
get(points, -73.97178913 , 40.69308257 ," Adelphi St & Myrtle Ave ");
get(points, -73.9747 , 40.78839 ," W 87 St & Amsterdam Ave ");
get(points, -73.896 , 40.848 ," NULL ");
get(points, -73.952918 , 40.676368 ," Bedford Ave & Bergen St ");
get(points, -73.97032517 , 40.75323098 ," E 47 St & 2 Ave ");
get(points, -73.9904394 , 40.668603 ," 12 St & 4 Ave ");
get(points, -74.00771779 , 40.72185379 ," Laight St & Hudson St ");
get(points, -73.97768752 , 40.72521311 ," E 9 St & Avenue C ");
get(points, -73.920827 , 40.763154 ," 31 Ave & 34 St ");
get(points, -73.96222088 , 40.773763 ," E 76 St & Park Ave ");
get(points, -73.98302136 , 40.6853761 ," Pacific St & Nevins St ");
get(points, -73.94552579 , 40.7862586 ," 2 Ave & E 99 St ");
get(points, -73.97374737 , 40.77896784 ," Central Park West & W 76 St ");
get(points, -73.99785768 , 40.6746957 ," Smith St & 9 St ");
get(points, -73.97700369358063 , 40.79313480986663 ," Riverside Dr & W 91 St ");
get(points, -73.968087 , 40.7919557 ," Columbus Ave & W 95 St ");
get(points, -73.9441232 , 40.7954121 ," Lexington Ave & E 111 St ");
get(points, -73.98912867 , 40.68926942 ," State St & Smith St ");
get(points, -73.9249574 , 40.768692 ," Crescent St & 30 Ave ");
get(points, -73.99203074 , 40.6902375 ," Court St & State St ");
get(points, -73.99723551 , 40.74734825 ," W 26 St & 8 Ave ");
get(points, -73.9125551 , 40.7747878 ," 31 St & 23 Ave ");
get(points, -74.0439909 , 40.7443187 ," Riverview Park ");
get(points, -73.99333264 , 40.6685455 ," 3 Ave & 14 St ");
get(points, -73.94223690032959 , 40.71907891179564 ," Richardson St & N Henry St ");
get(points, -73.9398167 , 40.8013066 ," Lexington Ave & E 120 St ");
get(points, -73.9762057363987 , 40.77579376683666 ," Central Park West & W 72 St ");
get(points, -73.99266288 , 40.71893904 ," Forsyth St & Broome St ");
get(points, -73.9566 , 40.7423737 ," 5 St & 51 Ave ");
get(points, -73.9596082 , 40.6765198 ," Classon Ave & St Marks Ave ");
get(points, -73.9397405 , 40.7527085 ," 24 St & 41 Ave ");
get(points, -73.95484712 , 40.72079821 ," N 12 St & Bedford Ave ");
get(points, -73.98178024 , 40.71926081 ," Pitt St & Stanton St ");
get(points, -73.97604882 , 40.7489006 ," E 39 St & 3 Ave ");
get(points, -73.99642959237099 , 40.738046142482766 ," W 15 St & 6 Ave ");
get(points, -73.941342 , 40.698617 ," Park Ave & Marcus Garvey Blvd ");
get(points, -73.99600982666016 , 40.72430527250332 ," Lafayette St & Jersey St ");
get(points, -73.93561 , 40.743 ," 47 Ave & 31 St ");
get(points, -73.98889957 , 40.73223272 ," E 12 St & 3 Ave ");
get(points, -73.99063168 , 40.6867443 ," Bergen St & Smith St ");
get(points, -73.93540375 , 40.74469738 ," 31 St & Thomson Ave ");
get(points, -73.893 , 40.857 ," NULL ");
get(points, -73.96905301 , 40.75001986 ," 1 Ave & E 44 St ");
get(points, -73.957539 , 40.745038 ," Center Blvd & 48 Ave ");
get(points, -73.95608 , 40.70934 ," S 4 St & Rodney St ");
get(points, -74.00218427181244 , 40.75018156325683 ," W 27 St & 10 Ave ");
get(points, -74.013942 , 40.701907 ," Bus Slip & State St ");
get(points, -73.99337909 , 40.69239502 ," Clinton St & Joralemon St ");
get(points, -73.9557689392 , 40.680342423 ," Lefferts Pl & Franklin Ave ");
get(points, -73.99422366 , 40.7158155 ," Forsyth St & Canal St ");
get(points, -73.98949474096298 , 40.692418292578466 ," Fulton St & Adams St ");
get(points, -73.98955109 , 40.7403432 ," Broadway & E 22 St ");
get(points, -73.99037292 , 40.6786115 ," Carroll St & Bond St ");
get(points, -73.97087984 , 40.6729679 ," Grand Army Plaza & Plaza St West ");
get(points, -74.00681753 , 40.74334935 ," W 16 St & The High Line ");
get(points, -73.93349289894103 , 40.75186951421875 ," 31 St & Northern Blvd ");
get(points, -73.97402311 , 40.7597108 ," E 53 St & Madison Ave ");
get(points, -73.9379 , 40.8029263 ," E 123 St & Lexington Ave ");
get(points, -73.98257732391357 , 40.75668720603179 ," W 45 St & 6 Ave ");
get(points, -73.9136695 , 40.7656251 ," Steinway St & 28 Ave ");
get(points, -73.99682619 , 40.71117444 ," Catherine St & Monroe St ");
get(points, -73.95796783 , 40.70708701 ," Division Ave & Marcy Ave ");
get(points, -74.00367558002472 , 40.7435337324616 ," W 18 St & 9 Ave ");
get(points, -73.98336183 , 40.76228826 ," Broadway & W 51 St ");
get(points, -73.94818595 , 40.70411791 ," Lorimer St & Broadway ");
get(points, -73.94370784 , 40.7892105 ," 2 Ave & E 104 St ");
get(points, -73.9362726 , 40.7601853 ," 21 St & 36 Ave ");
get(points, -73.99869893 , 40.6763947 ," Court St & Nelson St ");
get(points, -73.96024116 , 40.71534825 ," Metropolitan Ave & Bedford Ave ");
get(points, -73.964839 , 40.79127 ," Central Park W & W 96 St ");
get(points, -73.98362492 , 40.78414472 ," Riverside Dr & W 78 St ");
get(points, -73.916142 , 40.7729 ," 24 Ave & 29 St ");
get(points, -73.94803392 , 40.77536905 ," E 85 St & York Ave ");
get(points, -73.9448625 , 40.70870368 ," Scholes St & Manhattan Ave ");
get(points, -74.0100698 , 40.6753274 ," Wolcott St & Dwight St ");
get(points, -73.99015724658966 , 40.695317277669034 ," Cadman Plaza E & Johnson St ");
get(points, -73.971878855 , 40.7546011026 ," E 48 St & 3 Ave ");
get(points, -73.96968902 , 40.68764484 ," Clermont Ave & Lafayette Ave ");
get(points, -73.97846879 , 40.6765304 ," Berkeley Pl & 6 Ave ");
get(points, -73.96526895 , 40.76312584 ," 3 Ave & E 62 St ");
get(points, -73.991454 , 40.700469 ," Henry St & Poplar St ");
get(points, -73.99293911 , 40.71406667 ," Pike St & E Broadway ");
get(points, -73.945993 , 40.791976 ," E 106 St & Lexington Ave ");
get(points, -73.95921930670738 , 40.72248188638219 ," N 11 St & Kent Ave ");
get(points, -73.97324283 , 40.6776147 ," 7 Ave & Park Pl ");
get(points, -73.94371094 , 40.69622937 ," Throop Ave & Myrtle Ave ");
get(points, -74.00165855884552 , 40.72494672359416 ," W Broadway & Spring Street ");
get(points, -73.9471673 , 40.7839636 ," 2 Ave & E 96 St ");
get(points, -73.899 , 40.851 ," NULL ");
get(points, -73.99475825 , 40.680611 ," Carroll St & Smith St ");
get(points, -73.9970468 , 40.71413089 ," Division St & Bowery ");
get(points, -73.957481 , 40.7857851 ," 5 Ave & E 93 St ");
get(points, -73.94446054 , 40.77518615 ," East End Ave & E 86 St ");
get(points, -73.954131 , 40.672695 ," Sterling Pl & Bedford Ave ");
get(points, -73.98067966103554 , 40.72966729392978 ," E 13 St & Avenue A ");
get(points, -73.96226227283478 , 40.75892386377695 ," E 58 St & 1 Ave (NE Corner) ");
get(points, -74.00016545 , 40.71117416 ," St James Pl & Pearl St ");
get(points, -73.95299117 , 40.72708584 ," Meserole Ave & Manhattan Ave ");
get(points, -73.9184057 , 40.7699176 ," 31 St & Astoria Blvd ");
get(points, -73.94644578 , 40.70583339 ," Leonard St & Boerum St ");
get(points, -73.97282625 , 40.75255434 ," E 45 St & 3 Ave ");
get(points, -73.916916847229 , 40.761293897289086 ," 31 Ave & Steinway St ");
get(points, -73.95739 , 40.71469 ," Roebling St & N 4 St ");
get(points, -73.9561677 , 40.6758324 ," Franklin Ave & St Marks Ave ");
get(points, -73.9590097 , 40.77677702 ," E 81 St & Park Ave ");
get(points, -73.9605909006 , 40.7981856 ," W 106 St & Central Park West ");
get(points, -73.98205027 , 40.73587678 ," E 20 St & 2 Ave ");
get(points, -73.918544 , 40.774591 ," 24 Ave & 26 St ");
get(points, -73.99383324 , 40.686371 ," Warren St & Court St ");
get(points, -73.9489196240902 , 40.782454175279874 ," E 93 St & 2 Ave ");
get(points, -74.00711384 , 40.73291553 ," Christopher St & Greenwich St ");
get(points, -73.98690506 , 40.76584941 ," W 54 St & 9 Ave ");
get(points, -73.941275 , 40.7485 ," 27 St & Hunter St ");
get(points, -73.94594845 , 40.75052534 ," 21 St & 43 Ave ");
get(points, -73.95850939 , 40.71745169 ," N 6 St & Bedford Ave ");
get(points, -74.015756 , 40.711512 ," South End Ave & Liberty St ");
get(points, -73.94733276 , 40.74524768 ," Jackson Ave & 46 Rd ");
get(points, -73.98917958140373 , 40.763604677958625 ," W 50 St & 9 Ave ");
get(points, -73.9442507 , 40.8014866 ," E 118 St & Madison Ave ");
get(points, -74.00674436 , 40.73172428 ," Barrow St & Hudson St ");
get(points, -73.98192338 , 40.7652654 ," Broadway & W 56 St ");
get(points, -73.99404649 , 40.72903917 ," Washington Pl & Broadway ");
get(points, -73.98918695747852 , 40.77515953434235 ," W 64 St & Thelonious Monk Circle ");
get(points, -73.9183302 , 40.78145 ," Ditmars Blvd & 19 St ");
get(points, -73.96865397691727 , 40.758996559605116 ," E 55 St & 3 Ave ");
get(points, -73.9298911 , 40.6794268 ," Fulton St & Utica Ave ");
get(points, -73.9354504 , 40.7692475 ," Vernon Blvd & 31 Ave ");
get(points, -73.96222069859505 , 40.76471851944339 ," E 65 St & 2 Ave ");
get(points, -73.99138152 , 40.75466591 ," W 38 St & 8 Ave ");
get(points, -73.99144871 , 40.74395411 ," W 25 St & 6 Ave ");
get(points, -73.94073717 , 40.75110165 ," Queens Plaza North & Crescent St ");
get(points, -73.953149 , 40.809725 ," St Nicholas Ave & Manhattan Ave ");
get(points, -73.95238108 , 40.69527008 ," Nostrand Ave & Myrtle Ave ");
get(points, -73.9554162 , 40.6691783 ," Union St & Bedford Ave ");
get(points, -73.96579 , 40.6769694 ," Prospect Pl & Underhill Ave ");
get(points, -73.99093085 , 40.75019995 ," W 33 St & 7 Ave ");
get(points, -73.97973776 , 40.73912601 ," E 25 St & 2 Ave ");
get(points, -73.98377641 , 40.668127 ," 6 Ave & 9 St ");
get(points, -73.94708417 , 40.69957608 ," Tompkins Ave & Hopkins St ");
get(points, -73.99344027042389 , 40.69535693320225 ," Pierrepont St & Monroe Pl ");
get(points, -73.9169858 , 40.7671 ," 28 Ave & 35 St ");
get(points, -73.95643107 , 40.6906495 ," DeKalb Ave & Skillman St ");
get(points, -73.94976519 , 40.70538077 ," Boerum St & Broadway ");
get(points, -73.977706 , 40.751873 ," Pershing Square North ");
get(points, -73.94500379 , 40.71929301 ," Graham Ave & Herbert St ");
get(points, -73.9999786 , 40.69165183 ," Atlantic Ave & Furman St ");
get(points, -73.948852 , 40.74252 ," 49 Ave & 21 St ");
get(points, -73.95856158 , 40.77314236 ," E 77 St & 3 Ave ");
get(points, -73.95242929458618 , 40.78948541553215 ," Madison Ave & E 99 St ");
get(points, -73.97422494 , 40.72580614 ," Avenue D & E 12 St ");
get(points, -73.9437303 , 40.7016657 ," Broadway & Whipple St ");
get(points, -73.9476791024208 , 40.6803560840434 ," Verona Pl & Fulton St ");
get(points, -73.95995020866394 , 40.73181401720966 ," India St & West St ");
get(points, -73.9500479759 , 40.6809833854 ," Macon St & Nostrand Ave ");
get(points, -73.99905709 , 40.6809591 ," 1 Pl & Clinton St ");
get(points, -73.9452087 , 40.808442 ," Lenox Ave & W 126 St ");
get(points, -73.9364848 , 40.7638753 ," 34 Ave & 13 St ");
get(points, -74.013012 , 40.7149787 ," Murray St & West St ");
get(points, -73.98473765 , 40.73624527 ," E 19 St & 3 Ave ");
get(points, -74.00926027 , 40.7047177 ," Pearl St & Hanover Square ");
get(points, -74.0104554 , 40.71748752 ," Duane St & Greenwich St ");
get(points, -73.98191841 , 40.76915505 ," Broadway & W 60 St ");
get(points, -73.99724900722504 , 40.722103786686034 ," Cleveland Pl & Spring St ");
get(points, -73.944846 , 40.7989445 ," E 115 St & Madison Ave ");
get(points, -73.973736 , 40.697787 ," Carlton Ave & Flushing Ave ");
get(points, -73.99529885 , 40.74487634 ," W 24 St & 7 Ave ");
get(points, -73.9452416 , 40.69128258 ," Kosciuszko St & Tompkins Ave ");
get(points, -73.99923384189606 , 40.74937024193277 ," 9 Ave & W 28 St ");
get(points, -73.98215353488922 , 40.74311555376486 ," Lexington Ave & E 29 St ");
get(points, -73.97100056 , 40.70531194 ," Railroad Ave & Kay Ave ");
get(points, -73.942061 , 40.6894932 ," Greene Ave & Throop Ave ");
get(points, -73.94728331 , 40.7877214 ," 3 Ave & E 100 St ");
get(points, -73.95284 , 40.73555 ," McGuinness Blvd & Eagle St ");
get(points, -73.95206 , 40.78813 ," E 98 St & Park Ave ");
get(points, -73.98268129 , 40.76344058 ," Broadway & W 53 St ");
get(points, -74.007756 , 40.746745 ," W 20 St & 11 Ave ");
get(points, -74.01361706 , 40.70463334 ," Broadway & Battery Pl ");
get(points, -73.99392888 , 40.76727216 ," W 52 St & 11 Ave ");
get(points, -73.99917254 , 40.6847514 ," Henry St & Degraw St ");
get(points, -73.9485678 , 40.7552433 ," Vernon Blvd & 41 Rd ");
get(points, -73.9153175 , 40.776165 ," 23 Ave & 27 St ");
get(points, -73.93795609474182 , 40.753599202005596 ," 40 Ave & Crescent St ");
get(points, -73.96295 , 40.802692 ," W 110 St & Amsterdam Ave ");
get(points, -73.96599590778351 , 40.683238654603414 ," Fulton St & Waverly Ave ");
get(points, -74.00965965 , 40.72405549 ," Watts St & Greenwich St ");
get(points, -73.97703874 , 40.69327018 ," Myrtle Ave & St Edwards St ");
get(points, -73.9521 , 40.74966 ," 9 St & 44 Rd ");
get(points, -73.99510132 , 40.73331967 ," E 10 St & 5 Ave ");
get(points, -73.97895137 , 40.68312489 ," Dean St & 4 Ave ");
get(points, -73.937261 , 40.796879 ," E 116 St & 2 Ave ");
get(points, -73.98068914 , 40.69839895 ," Nassau St & Navy St ");
get(points, -73.97207836 , 40.75714758 ," E 51 St & Lexington Ave ");
get(points, -73.99456405 , 40.73971301 ," W 18 St & 6 Ave ");
get(points, -73.930819 , 40.7659 ," 21 St & 31 Dr ");
get(points, -73.97793172 , 40.72082834 ," Avenue D & E 3 St ");
get(points, -73.98672378 , 40.73047309 ," E 11 St & 2 Ave ");
get(points, -73.99612349 , 40.69089272 ," Henry St & Atlantic Ave ");
get(points, -73.887 , 40.857 ," NULL ");
get(points, -74.01195555925369 , 40.67363551341504 ," Dwight St & Van Dyke St ");
get(points, -73.91065120697021 , 40.76408932350688 ," 28 Ave & 44 St ");
get(points, -73.95577801 , 40.7727966 ," E 78 St & 2 Ave ");
get(points, -73.98501142859459 , 40.674613422475815 ," 4 Ave & 2 St ");
get(points, -73.9680438 , 40.6794388 ," Bergen St & Vanderbilt Ave ");
get(points, -73.97992193698882 , 40.752165280621966 ," E 41 St & Madison Ave ");
get(points, -74.00483091 , 40.73535398 ," Perry St & Bleecker St ");
get(points, -73.98142006 , 40.72740794 ," E 10 St & Avenue A ");
get(points, -73.97498696 , 40.75510267 ," E 47 St & Park Ave ");
get(points, -74.00264 , 40.752957 ," 10 Hudson Yards ");
get(points, -73.9634 , 40.8109494 ," W 120 St & Claremont Ave ");
get(points, -73.967416 , 40.756014 ," E 52 St & 2 Ave ");
get(points, -73.98788205 , 40.76227205 ," W 49 St & 8 Ave ");
get(points, -73.93985509872437 , 40.76315481910373 ," 35 Ave & 10 St ");
get(points, -73.925921 , 40.761584 ," 31 St & Broadway ");
get(points, -73.982578 , 40.70224 ," Front St & Gold St ");
get(points, -73.99480012 , 40.72317958 ," Mott St & Prince St ");
get(points, -73.95960688591003 , 40.743366080270214 ," Center Blvd & 51 Ave ");
get(points, -73.96094022 , 40.7612274 ," 1 Ave & E 62 St ");
get(points, -73.9605563879013 , 40.666439306870814 ," Montgomery St & Franklin Ave ");
get(points, -74.00451887 , 40.74691959 ," W 22 St & 10 Ave ");
get(points, -73.944024 , 40.711863 ," Graham Ave & Grand St ");
get(points, -74.0090009 , 40.71870987 ," Harrison St & Hudson St ");
get(points, -73.99009296 , 40.73704984 ," E 17 St & Broadway ");
get(points, -73.893 , 40.848 ," NULL ");
get(points, -74.0127234 , 40.70255065 ," Water - Whitehall Plaza ");
get(points, -73.95033068 , 40.7904828 ," E 102 St & Park Ave ");
get(points, -73.97948148 , 40.71219906 ," Cherry St ");
get(points, -73.973984 , 40.730563 ," Avenue C & E 18 St ");
get(points, -73.964928 , 40.805973 ," W 113 St & Broadway ");
get(points, -73.963198 , 40.716887 ," Wythe Ave & Metropolitan Ave ");
get(points, -73.9919254 , 40.72110063 ," Rivington St & Chrystie St ");
get(points, -73.97854971 , 40.6795766 ," Baltic St & 5 Ave ");
get(points, -73.9333349 , 40.7949879 ," Pleasant Ave & E 116 St ");
get(points, -73.9430681 , 40.8107922 ," Lenox Ave & W 130 St ");
get(points, -73.9279917 , 40.7531106 ," 37 Ave & 35 St ");
get(points, -73.95133465 , 40.69072549 ," Kosciuszko St & Nostrand Ave ");
get(points, -73.94782145 , 40.7961535 ," E 110 St & Madison Ave ");
get(points, -74.00197139 , 40.7454973 ," 9 Ave & W 22 St ");
get(points, -73.98085795 , 40.7208736 ," E 2 St & Avenue C ");
get(points, -73.95621 , 40.72606 ," Banker St & Meserole Ave ");
get(points, -73.9854617 , 40.6663181 ," 6 Ave & 12 St ");
get(points, -73.955613 , 40.799484 ," Central Park North & Adam Clayton Powell Blvd ");
get(points, -73.927631 , 40.7767 ," Astoria Park S & Shore Blvd ");
get(points, -73.97945255041122 , 40.6610633719006 ," West Drive & Prospect Park West ");
get(points, -73.98721285164356 , 40.68461653897949 ," Wyckoff St & Bond St ");
get(points, -73.95411749 , 40.74232744 ," Vernon Blvd & 50 Ave ");
get(points, -73.96841526031494 , 40.707644944175705 ," Kent Ave & S 11 St ");
get(points, -73.98316936 , 40.75527307 ," W 43 St & 6 Ave ");
get(points, -73.935775 , 40.686312 ," Lewis Ave & Madison St ");
get(points, -74.0103006362915 , 40.72019521437465 ," North Moore St & Greenwich St ");
get(points, -73.95698119 , 40.71286844 ," Grand St & Havemeyer St ");
get(points, -73.98775226 , 40.6750705 ," 3 St & 3 Ave ");
get(points, -73.97706058 , 40.74290902 ," 2 Ave & E 31 St ");
get(points, -73.9796772 , 40.68683208 ," 3 Ave & Schermerhorn St ");
get(points, -73.893 , 40.851 ," NULL ");
get(points, -73.98054420948029 , 40.733812191966315 ," 1 Ave & E 18 St ");
get(points, -74.0091059 , 40.71625008 ," Hudson St & Reade St ");
get(points, -74.00293877 , 40.73401143 ," W 4 St & 7 Ave S ");
get(points, -73.96427392959595 , 40.77632142182271 ," 5 Ave & E 78 St ");
get(points, -73.97782542 , 40.7734066 ," Central Park West & W 68 St ");
get(points, -73.97632328 , 40.68382604 ," Atlantic Ave & Fort Greene Pl ");
get(points, -73.9523 , 40.7987859 ," Lenox Ave & W 111 St ");
get(points, -73.99931783 , 40.73935542 ," W 15 St & 7 Ave ");
get(points, -73.98765428 , 40.75097711 ," Broadway & W 36 St ");
get(points, -73.968896 , 40.693261 ," Clinton Ave & Myrtle Ave ");
get(points, -73.98753523 , 40.75172632 ," Broadway & W 37 St ");
get(points, -73.99190759 , 40.71605866 ," Allen St & Hester St ");
get(points, -73.95866 , 40.73564 ," Franklin St & Dupont St ");
get(points, -73.98154004 , 40.6792788 ," Douglass St & 4 Ave ");
get(points, -73.98282002 , 40.6772744 ," Union St & 4 Ave ");
get(points, -73.97668709 , 40.72228087 ," E 6 St & Avenue D ");
get(points, -74.00860912 , 40.6812117 ," Commerce St & Van Brunt St ");
get(points, -73.98451656103134 , 40.688417427540834 ," Schermerhorn St & Bond St ");
get(points, -73.9262231 , 40.7569332 ," 34 St & 35 Ave ");
get(points, -73.96119945 , 40.76873687 ," 3 Ave & E 71 St ");
get(points, -74.00014502 , 40.6783563 ," Clinton St & 4 Place ");
get(points, -73.98848395 , 40.74901271 ," 6 Ave & W 33 St ");
get(points, -73.9851615 , 40.76370739 ," 8 Ave & W 52 St ");
get(points, -73.955327 , 40.7835016 ," E 91 St & Park Ave ");
get(points, -74.00566443 , 40.72243797 ," 6 Ave & Canal St ");
get(points, -73.96648977 , 40.76440023 ," Lexington Ave & E 63 St ");
get(points, -73.98683077 , 40.7451677 ," 5 Ave & E 29 St ");
get(points, -73.98895053 , 40.666287 ," 14 St & 5 Ave ");
get(points, -73.9734419 , 40.74780373 ," E 39 St & 2 Ave ");
get(points, -74.00731853 , 40.70706456 ," Maiden Ln & Pearl St ");
get(points, -74.00859207 , 40.7361967 ," Bank St & Washington St ");
get(points, -73.98541675 , 40.6704922 ," 7 St & 5 Ave ");
get(points, -73.97791 , 40.751581 ," Pershing Square South ");
get(points, -73.976682 , 40.68691865 ," Lafayette Ave & Fort Greene Pl ");
get(points, -73.9391224 , 40.7576314 ," 21 St & 38 Ave ");
get(points, -73.955637216568 , 40.67759206937376 ," Dean St & Franklin Ave ");
get(points, -73.890 , 40.857 ," NULL ");
get(points, -73.9559308 , 40.8038654 ," Frederick Douglass Blvd & W 115 St ");
get(points, -74.00722156 , 40.70862144 ," John St & William St ");
get(points, -73.9587903 , 40.6791944 ," Pacific St & Classon Ave ");
get(points, -73.942954 , 40.80295 ," Madison Ave & E 120 St ");
get(points, -73.9596214 , 40.8086249 ," Amsterdam Ave & W 119 St ");
get(points, -73.951475 , 40.804372 ," Adam Clayton Powell Blvd & W 118 St ");
get(points, -73.945133 , 40.75742 ," 40 Ave & 9 St ");
get(points, -73.98261428 , 40.77163851 ," W 63 St & Broadway ");
get(points, -73.9614583 , 40.68223166 ," Fulton St & Grand Ave ");
get(points, -73.95348296 , 40.76663814 ," E 72 St & York Ave ");
get(points, -73.96304 , 40.68488 ," Cambridge Pl & Gates Ave ");
get(points, -73.944694 , 40.686203 ," Monroe St & Tompkins Ave ");
get(points, -73.9710097 , 40.6809741 ," Carlton Ave & Dean St ");
get(points, -73.98978041 , 40.7262807 ," E 4 St & 2 Ave ");
get(points, -73.884 , 40.860 ," NULL ");
get(points, -73.9423 , 40.797911 ," E 115 St & Lexington Ave ");
get(points, -73.98185424 , 40.72453734 ," E 6 St & Avenue B ");
get(points, -73.9916 , 40.749156 ," W 31 St & 7 Ave ");
get(points, -73.95141312 , 40.71167351 ," Hope St & Union Ave ");
get(points, -73.97805914282799 , 40.75724567911726 ," E 48 St & 5 Ave ");
get(points, -73.9411265 , 40.7614376 ," 36 Ave & 10 St ");
get(points, -73.94626915 , 40.69425403 ," Willoughby Ave & Tompkins Ave ");
get(points, -73.941606 , 40.795508 ," 3 Ave & E 112 St ");
get(points, -73.97371465 , 40.7643971 ," Grand Army Plaza & Central Park S ");
get(points, -73.98476437 , 40.69766564 ," Concord St & Bridge St ");
get(points, -73.97523209452629 , 40.675146838709786 ," Berkeley Pl & 7 Ave ");
get(points, -73.99383605 , 40.70277159 ," Old Fulton St ");
get(points, -73.96408963 , 40.70853074 ," Bedford Ave & S 9 St ");
get(points, -73.95381995 , 40.69331716 ," Willoughby Ave & Walworth St ");
get(points, -73.95818491 , 40.76500525 ," 1 Ave & E 68 St ");
get(points, -73.97519523 , 40.6793307 ," Prospect Pl & 6 Ave ");
get(points, -73.905 , 40.863 ," NULL ");
get(points, -74.01658354 , 40.7153379 ," Vesey Pl & River Terrace ");
get(points, -73.98490707 , 40.74765947 ," E 33 St & 5 Ave ");
get(points, -73.99079024791718 , 40.681990442707026 ," Degraw St & Hoyt St ");
get(points, -73.94821286201477 , 40.71638031973561 ," Jackson St & Leonard St ");
get(points, -73.96685276 , 40.77282817 ," 5 Ave & E 73 St ");
get(points, -73.94705951213837 , 40.7103685423523 ," Leonard St & Maujer St ");
get(points, -73.98208968 , 40.6704836 ," 5 St & 6 Ave ");
get(points, -73.934326 , 40.754876 ," 28 St & 38 Ave ");
get(points, -73.9569115 , 40.6627059 ," Sterling St & Bedford Ave ");
get(points, -73.99548059 , 40.70037867 ," Columbia Heights & Cranberry St ");
get(points, -73.96409422159195 , 40.77118287540658 ," E 72 St & Park Ave ");
get(points, -73.9783501625061 , 40.76309387270797 ," W 55 St & 6 Ave ");
get(points, -73.949373 , 40.8078316 ," Adam Clayton Powell Blvd & W 123 St ");
get(points, -73.97449783980846 , 40.74322681432173 ," E 33 St & 1 Ave ");
get(points, -73.9631611 , 40.6737236 ," St Johns Pl & Washington Ave ");
get(points, -73.986274 , 40.720747 ," Stanton St & Norfolk St ");
get(points, -73.9391141 , 40.7627442 ," 11 St & 35 Ave ");
get(points, -73.95852515 , 40.7190095 ," Berry St & N 8 St ");
get(points, -73.98721619 , 40.75299641 ," Broadway & W 38 St ");
get(points, -73.97440128028393 , 40.699997484388504 ," 5 St & Market St ");
get(points, -73.98759104 , 40.6864442 ," Dean St & Hoyt St ");
get(points, -73.9739 , 40.7921 ," W 92 St & Broadway ");
get(points, -73.96224617958069 , 40.76712840349542 ," E 68 St & 3 Ave ");
const convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    console.log(res);
    return res;
};


//echarts中使用地图的配置参数
var option = {
    bmap: {
        // 百度地图中心经纬度 坐标拾取器http://api.map.baidu.com/lbsapi/getpoint/index.html
        center: [-73.98997825,40.72019576],
        // 百度地图缩放等级，数字越大，放大越大，地图比例尺越小
        zoom: 15,
        // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
        roam: true,
        // mapStyle是百度地图的自定义样式，见 http://developer.baidu.com/map/custom/
        mapStyle: {
            styleJson: [/*{
                "featureType": "water",
                "elementType": "all",
                "stylers": {
                    "color": "#021019"
                }
            },
                {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#000000"
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#147a92"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#000000"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#0b3d51"
                    }
                },
                {
                    "featureType": "local",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#000000"
                    }
                },
                {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                        "color": "#08304b"
                    }
                },
                {
                    "featureType": "railway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#000000"
                    }
                },
                {
                    "featureType": "railway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#08304b"
                    }
                },
                {
                    "featureType": "subway",
                    "elementType": "geometry",
                    "stylers": {
                        "lightness": -70
                    }
                },
                {
                    "featureType": "building",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#000000"
                    }
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#857f7f"
                    }
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#000000"
                    }
                },
                {
                    "featureType": "building",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#022338"
                    }
                },
                {
                    "featureType": "green",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#062032"
                    }
                },
                {
                    "featureType": "boundary",
                    "elementType": "all",
                    "stylers": {
                        "color": "#1e1c1c"
                    }
                },
                {
                    "featureType": "manmade",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#022338"
                    }
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#2da0c6",
                        "visibility": "on"
                    }
                }*/
            ]
        }
    },
    "title": [
        {
            "text": "纽约自行车租还情况图",
            "padding": 5,
            "itemGap": 10
        }
    ],
    "legend": [
        {
            "data": [
                "2020-3"
            ],
            "selected": {
                "2020-3": true
            },
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
//series是在地图上的线条等效果的配置文件，具体可以查阅文档。
    series: [
        {
        name: "2020-3",
        type: 'lines',
        coordinateSystem: 'bmap',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: 'arrow',
            symbolSize: 10,
            constantSpeed: 0,

        },
        "symbol": [
            "none",

        ],
        lineStyle: {
            normal: {
                color: "#a6c84c",
                width: 2,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        //将手动做的一个迁徙数据放入线条的数据部分。
        data: linesdata
    },
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: points,
            symbolSize: 10,
            encode: {
                value: 2
            },
            label: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "formatter": function (params) {
            console.log(params);
            return params.data.name;

        },
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    }

};

//配置参数传入图形实例中
myChart.setOption(option);
//初始化bmap和echarts实例绑定
var bmap = myChart.getModel().getComponent('bmap').getBMap();
bmap.addControl(new BMap.MapTypeControl());

if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点



   points=[];
    /*var point = new BMap.Point( -74.00277668 , 40.76087502 );
    point.title = "杭州";
    point.name = "超级大厦";
    points.push(point);*/
   /* var options = {
        size: BMAP_POINT_SIZE_SMALL,
        shape: BMAP_POINT_SHAPE_STAR,
        color: '#d340c3'
    }*/
    var pointCollection = new BMap.PointCollection(points);  // 初始化PointCollection
    pointCollection.addEventListener('click', function (e) {
        var opts = {
            width : 200,     // 信息窗口宽度
            height: 100,     // 信息窗口高度
            title :e.point.title , // 信息窗口标题
            enableMessage:true,//设置允许信息窗发送短息
        }

        var infoWindow = new BMap.InfoWindow(e.point.lng + ',' + e.point.lat, opts);  // 创建信息窗口对象

        map.openInfoWindow(infoWindow,e.point); //开启信息窗口
        alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat);  // 监听点击事件
    });
    bmap.addOverlay(pointCollection);  // 添加Overlay
} else {
    alert('请在chrome、safari、IE8+以上浏览器查看本示例');
}

function get(points,lng,lat,title) {
    points.push({
        name:title,
        value:[lng,lat]
    });
}