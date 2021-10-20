//初始化echarts,并和框体map绑定。
var myChart = echarts.init(document.getElementById('map'));

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
    {fromName: " E 20 St & Park Ave ",toName: " E 115 St & Lexington Ave ",coords:[[ -73.98751968 , 40.73827428 ], [ -73.9423 , 40.797911 ]]},
    {fromName: " 11 Ave & W 41 St ",toName: " Pershing Square North ",coords:[[ -73.99884222 , 40.76030096 ], [ -73.977706 , 40.751873 ]]},
    {fromName: " W 84 St & Broadway ",toName: " W 78 St & Broadway ",coords:[[ -73.977112 , 40.7867947 ], [ -73.98093133 , 40.78339981 ]]},
    {fromName: " Mott St & Prince St ",toName: " E 11 St & Avenue B ",coords:[[ -73.99480012 , 40.72317958 ], [ -73.97950418293476 , 40.72746420692392 ]]},
    {fromName: " W 110 St & Amsterdam Ave ",toName: " Amsterdam Ave & W 119 St ",coords:[[ -73.96295 , 40.802692 ], [ -73.9596214 , 40.8086249 ]]},
    {fromName: " E 123 St & Lexington Ave ",toName: " Pleasant Ave & E 116 St ",coords:[[ -73.9379 , 40.8029263 ], [ -73.9333349 , 40.7949879 ]]},
    {fromName: " Allen St & Hester St ",toName: " E 7 St & Avenue A ",coords:[[ -73.99190759 , 40.71605866 ], [ -73.98379855 , 40.72621788 ]]},
    {fromName: " Clinton St & Union St ",toName: " Division Av & Hooper St ",coords:[[ -73.99785267 , 40.6831164 ], [ -73.9544353965357 , 40.70684203101325 ]]},
    {fromName: " Park Ave & Marcus Garvey Blvd ",toName: " Emerson Pl & Myrtle Ave ",coords:[[ -73.941342 , 40.698617 ], [ -73.96223558 , 40.69363137 ]]},
    {fromName: " Broadway & W 32 St ",toName: " Underhill Ave & Pacific St ",coords:[[ -73.98808416 , 40.74854862 ], [ -73.9646795 , 40.6804836 ]]},
    {fromName: " Lexington Ave & E 29 St ",toName: " 1 Ave & E 16 St ",coords:[[ -73.98215353488922 , 40.74311555376486 ], [ -73.98165557 , 40.73221853 ]]},
    {fromName: " Central Park West & W 68 St ",toName: " Columbus Ave & W 95 St ",coords:[[ -73.97782542 , 40.7734066 ], [ -73.968087 , 40.7919557 ]]},
    {fromName: " Broadway & E 14 St ",toName: " E 11 St & 2 Ave ",coords:[[ -73.99074142 , 40.73454567 ], [ -73.98672378 , 40.73047309 ]]},
    {fromName: " E 2 St & Avenue A ",toName: " E 11 St & 1 Ave ",coords:[[ -73.98583620786667 , 40.72307749068673 ], [ -73.98426726 , 40.72953837 ]]},
    {fromName: " Riverside Blvd & W 67 St ",toName: " E 84 St & 1 Ave ",coords:[[ -73.98888587951659 , 40.777507027547976 ], [ -73.95068615 , 40.77565541 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " Broadway & W 49 St ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.9845272898674 , 40.76068327096592 ]]},
    {fromName: " W 92 St & Broadway ",toName: " W 100 St & Broadway ",coords:[[ -73.9739 , 40.7921 ], [ -73.97041192 , 40.7973721 ]]},
    {fromName: " South End Ave & Liberty St ",toName: " Fulton St & Broadway ",coords:[[ -74.015756 , 40.711512 ], [ -74.009447 , 40.711066 ]]},
    {fromName: " 9 Ave & W 22 St ",toName: " W 21 St & 6 Ave ",coords:[[ -74.00197139 , 40.7454973 ], [ -73.99415556 , 40.74173969 ]]},
    {fromName: " S 4 St & Rodney St ",toName: " Union Ave & Wallabout St ",coords:[[ -73.95608 , 40.70934 ], [ -73.95032283 , 40.70029511 ]]},
    {fromName: " Broadway & W 36 St ",toName: " W 49 St & 8 Ave ",coords:[[ -73.98765428 , 40.75097711 ], [ -73.98788205 , 40.76227205 ]]},
    {fromName: " W 43 St & 10 Ave ",toName: " W 53 St & 10 Ave ",coords:[[ -73.99461843 , 40.76009437 ], [ -73.99061728 , 40.76669671 ]]},
    {fromName: " W 11 St & 6 Ave ",toName: " E 25 St & 2 Ave ",coords:[[ -73.99800419 , 40.73532427 ], [ -73.97973776 , 40.73912601 ]]},
    {fromName: " Suffolk St & Stanton St ",toName: " Suffolk St & Stanton St ",coords:[[ -73.98517977 , 40.72066442 ], [ -73.98517977 , 40.72066442 ]]},
    {fromName: " E 39 St & 2 Ave ",toName: " E 51 St & 1 Ave ",coords:[[ -73.9734419 , 40.74780373 ], [ -73.96592976 , 40.75455731 ]]},
    {fromName: " Great Jones St ",toName: " W 4 St & 7 Ave S ",coords:[[ -73.99379025 , 40.72743423 ], [ -74.00293877 , 40.73401143 ]]},
    {fromName: " Huron St & Franklin St ",toName: " Bedford Ave & Nassau Ave ",coords:[[ -73.95826 , 40.73266 ], [ -73.95212324 , 40.72311651 ]]},
    {fromName: " W 17 St & 9 Ave ",toName: " W 16 St & 8 Ave ",coords:[[ -74.00413691997528 , 40.74294891660091 ], [ -74.001384973526 , 40.741021509002664 ]]},
    {fromName: " Washington Pl & 6 Ave ",toName: " E 11 St & 1 Ave ",coords:[[ -74.00026394 , 40.73224119 ], [ -73.98426726 , 40.72953837 ]]},
    {fromName: " E 10 St & 5 Ave ",toName: " E 11 St & 1 Ave ",coords:[[ -73.99510132 , 40.73331967 ], [ -73.98426726 , 40.72953837 ]]},
    {fromName: " E 77 St & 3 Ave ",toName: " E 81 St & York Ave ",coords:[[ -73.95856158 , 40.77314236 ], [ -73.94989233 , 40.7728384 ]]},
    {fromName: " E 7 St & Avenue A ",toName: " S 3 St & Bedford Ave ",coords:[[ -73.98379855 , 40.72621788 ], [ -73.96264403 , 40.71260486 ]]},
    {fromName: " Central Park North & Adam Clayton Powell Blvd ",toName: " E 102 St & Park Ave ",coords:[[ -73.955613 , 40.799484 ], [ -73.95033068 , 40.7904828 ]]},
    {fromName: " W 38 St & 8 Ave ",toName: " E 6 St & Avenue B ",coords:[[ -73.99138152 , 40.75466591 ], [ -73.98185424 , 40.72453734 ]]},
    {fromName: " 46 Ave & 5 St ",toName: " India St & Manhattan Ave ",coords:[[ -73.95451 , 40.74731 ], [ -73.9550858 , 40.73232194 ]]},
    {fromName: " Allen St & Hester St ",toName: " Pike St & Monroe St ",coords:[[ -73.99190759 , 40.71605866 ], [ -73.99193043 , 40.71173107 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " E 11 St & Avenue B ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -73.97950418293476 , 40.72746420692392 ]]},
    {fromName: " Allen St & Stanton St ",toName: " Grand St & Elizabeth St ",coords:[[ -73.989111 , 40.722055 ], [ -73.99596 , 40.718822 ]]},
    {fromName: " 6 Ave & W 33 St ",toName: " E 33 St & 1 Ave ",coords:[[ -73.98848395 , 40.74901271 ], [ -73.97449783980846 , 40.74322681432173 ]]},
    {fromName: " Great Jones St ",toName: " Grand St & Elizabeth St ",coords:[[ -73.99379025 , 40.72743423 ], [ -73.99596 , 40.718822 ]]},
    {fromName: " W 38 St & 8 Ave ",toName: " W 45 St & 8 Ave ",coords:[[ -73.99138152 , 40.75466591 ], [ -73.98859651 , 40.75929124 ]]},
    {fromName: " Broadway & E 22 St ",toName: " 1 Ave & E 16 St ",coords:[[ -73.98955109 , 40.7403432 ], [ -73.98165557 , 40.73221853 ]]},
    {fromName: " St Marks Pl & 1 Ave ",toName: " Broadway & Roebling St ",coords:[[ -73.98564945 , 40.72779126 ], [ -73.96063148975372 , 40.70924826276157 ]]},
    {fromName: " Classon Ave & St Marks Ave ",toName: " Bedford Ave & Bergen St ",coords:[[ -73.9596082 , 40.6765198 ], [ -73.952918 , 40.676368 ]]},
    {fromName: " E 11 St & 1 Ave ",toName: " E 2 St & Avenue A ",coords:[[ -73.98426726 , 40.72953837 ], [ -73.98583620786667 , 40.72307749068673 ]]},
    {fromName: " Leonard St & Nassau Ave ",toName: " Nassau Ave & Russell St ",coords:[[ -73.94984364509583 , 40.7239567849954 ], [ -73.94434 , 40.72557 ]]},
    {fromName: " St Marks Pl & 1 Ave ",toName: " E 9 St & Avenue C ",coords:[[ -73.98564945 , 40.72779126 ], [ -73.97768752 , 40.72521311 ]]},
    {fromName: " E 23 St & 1 Ave ",toName: " W 24 St & 7 Ave ",coords:[[ -73.97809472 , 40.736502 ], [ -73.99529885 , 40.74487634 ]]},
    {fromName: " Broadway & W 49 St ",toName: " St Marks Pl & 1 Ave ",coords:[[ -73.9845272898674 , 40.76068327096592 ], [ -73.98564945 , 40.72779126 ]]},
    {fromName: " Clermont Ave & Park Ave ",toName: " Pitt St & Stanton St ",coords:[[ -73.97129668 , 40.69573398 ], [ -73.98178024 , 40.71926081 ]]},
    {fromName: " 2 Ave & E 96 St ",toName: " E 106 St & 1 Ave ",coords:[[ -73.9471673 , 40.7839636 ], [ -73.93956237 , 40.7892529 ]]},
    {fromName: " Howard St & Centre St ",toName: " 1 Ave & E 18 St ",coords:[[ -73.99973337 , 40.71910537 ], [ -73.98054420948029 , 40.733812191966315 ]]},
    {fromName: " St Marks Pl & 1 Ave ",toName: " Barrow St & Hudson St ",coords:[[ -73.98564945 , 40.72779126 ], [ -74.00674436 , 40.73172428 ]]},
    {fromName: " Broadway & E 22 St ",toName: " Franklin St & W Broadway ",coords:[[ -73.98955109 , 40.7403432 ], [ -74.00666661 , 40.71911552 ]]},
    {fromName: " Adelphi St & Myrtle Ave ",toName: " Park Ave & Marcus Garvey Blvd ",coords:[[ -73.97178913 , 40.69308257 ], [ -73.941342 , 40.698617 ]]},
    {fromName: " LaGuardia Pl & W 3 St ",toName: " Allen St & Rivington St ",coords:[[ -73.99810231 , 40.72917025 ], [ -73.98997825 , 40.72019576 ]]},
    {fromName: " 35 St & 34 Ave ",toName: " Montrose Ave & Bushwick Ave ",coords:[[ -73.9242751 , 40.7580583 ], [ -73.94016171 , 40.70767788 ]]},
    {fromName: " W 95 St & Broadway ",toName: " W 100 St & Manhattan Ave ",coords:[[ -73.971888 , 40.7937704 ], [ -73.9645 , 40.795 ]]},
    {fromName: " Hanson Pl & Ashland Pl ",toName: " 3 St & 3 Ave ",coords:[[ -73.97790759801863 , 40.68506807308177 ], [ -73.98775226 , 40.6750705 ]]},
    {fromName: " 2 Ave & E 31 St ",toName: " E 25 St & 2 Ave ",coords:[[ -73.97706058 , 40.74290902 ], [ -73.97973776 , 40.73912601 ]]},
    {fromName: " St Johns Pl & Washington Ave ",toName: " Park Pl & Franklin Ave ",coords:[[ -73.9631611 , 40.6737236 ], [ -73.9564947 , 40.6741806 ]]},
    {fromName: " Emerson Pl & Myrtle Ave ",toName: " Boerum St & Broadway ",coords:[[ -73.96223558 , 40.69363137 ], [ -73.94976519 , 40.70538077 ]]},
    {fromName: " Cooper Square & Astor Pl ",toName: " Stanton St & Mangin St ",coords:[[ -73.99075269699097 , 40.72951496224949 ], [ -73.97628939 , 40.71782143 ]]},
    {fromName: " E 11 St & 2 Ave ",toName: " Catherine St & Monroe St ",coords:[[ -73.98672378 , 40.73047309 ], [ -73.99682619 , 40.71117444 ]]},
    {fromName: " E 7 St & Avenue A ",toName: " Lafayette St & E 8 St ",coords:[[ -73.98379855 , 40.72621788 ], [ -73.99102628231049 , 40.73020660529954 ]]},
    {fromName: " W 16 St & 8 Ave ",toName: " W 49 St & 8 Ave ",coords:[[ -74.001384973526 , 40.741021509002664 ], [ -73.98788205 , 40.76227205 ]]},
    {fromName: " E 6 St & Avenue B ",toName: " E 2 St & Avenue A ",coords:[[ -73.98185424 , 40.72453734 ], [ -73.98583620786667 , 40.72307749068673 ]]},
    {fromName: " 5 Ave & E 78 St ",toName: " E 78 St & 2 Ave ",coords:[[ -73.96427392959595 , 40.77632142182271 ], [ -73.95577801 , 40.7727966 ]]},
    {fromName: " Spruce St & Nassau St ",toName: " Allen St & Stanton St ",coords:[[ -74.00552427 , 40.71146364 ], [ -73.989111 , 40.722055 ]]},
    {fromName: " E 27 St & 1 Ave ",toName: " FDR Drive & E 35 St ",coords:[[ -73.976806 , 40.739445 ], [ -73.97121214 , 40.744219 ]]},
    {fromName: " 34 Ave & 21 St ",toName: " 34 Ave & 13 St ",coords:[[ -73.9342862 , 40.7628138 ], [ -73.9364848 , 40.7638753 ]]},
    {fromName: " 9 Ave & W 45 St ",toName: " W 35 St & Dyer Ave ",coords:[[ -73.9912551 , 40.76019252 ], [ -73.99740189313889 , 40.754691750226016 ]]},
    {fromName: " 9 Ave & W 45 St ",toName: " W 35 St & Dyer Ave ",coords:[[ -73.9912551 , 40.76019252 ], [ -73.99740189313889 , 40.754691750226016 ]]},
    {fromName: " Old Fulton St ",toName: " Hanson Pl & Ashland Pl ",coords:[[ -73.99383605 , 40.70277159 ], [ -73.97790759801863 , 40.68506807308177 ]]},
    {fromName: " Broadway & Roebling St ",toName: " Broadway & Berry St ",coords:[[ -73.96063148975372 , 40.70924826276157 ], [ -73.96525063 , 40.71044554 ]]},
    {fromName: " Central Park West & W 72 St ",toName: " W 74 St & Columbus Ave ",coords:[[ -73.9762057363987 , 40.77579376683666 ], [ -73.97754961 , 40.7785669 ]]},
    {fromName: " Sullivan St & Washington Sq ",toName: " University Pl & E 14 St ",coords:[[ -73.99906065 , 40.73047747 ], [ -73.99200509 , 40.73492695 ]]},
    {fromName: " Eastern Pkwy & Franklin Ave ",toName: " Franklin Ave & St Marks Ave ",coords:[[ -73.9576801 , 40.6707767 ], [ -73.9561677 , 40.6758324 ]]},
    {fromName: " Lispenard St & Broadway ",toName: " E 2 St & 2 Ave ",coords:[[ -74.00247214 , 40.71939226 ], [ -73.99069656 , 40.72502876 ]]},
    {fromName: " Clinton St & Joralemon St ",toName: " Richards St & Delavan St ",coords:[[ -73.99337909 , 40.69239502 ], [ -74.00785041 , 40.6794327 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 47 St & Park Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97498696 , 40.75510267 ]]},
    {fromName: " LaGuardia Pl & W 3 St ",toName: " Pike St & E Broadway ",coords:[[ -73.99810231 , 40.72917025 ], [ -73.99293911 , 40.71406667 ]]},
    {fromName: " Metropolitan Ave & Bedford Ave ",toName: " Leonard St & Nassau Ave ",coords:[[ -73.96024116 , 40.71534825 ], [ -73.94984364509583 , 40.7239567849954 ]]},
    {fromName: " Vernon Blvd & 50 Ave ",toName: " N 6 St & Bedford Ave ",coords:[[ -73.95411749 , 40.74232744 ], [ -73.95850939 , 40.71745169 ]]},
    {fromName: " Hanson Pl & Ashland Pl ",toName: " Monroe St & Classon Ave ",coords:[[ -73.97790759801863 , 40.68506807308177 ], [ -73.95881081 , 40.6845683 ]]},
    {fromName: " E 4 St & 2 Ave ",toName: " E 11 St & 2 Ave ",coords:[[ -73.98978041 , 40.7262807 ], [ -73.98672378 , 40.73047309 ]]},
    {fromName: " W 47 St & 10 Ave ",toName: " W 41 St & 8 Ave ",coords:[[ -73.99301222 , 40.76269882 ], [ -73.9900262 , 40.75640548 ]]},
    {fromName: " Leonard St & Church St ",toName: " W 54 St & 9 Ave ",coords:[[ -74.005549 , 40.717571 ], [ -73.98690506 , 40.76584941 ]]},
    {fromName: " W 22 St & 8 Ave ",toName: " W 20 St & 7 Ave ",coords:[[ -73.99915362 , 40.74475148 ], [ -73.99726235 , 40.74238787 ]]},
    {fromName: " Broadway & Roebling St ",toName: " McKibbin St & Manhattan Ave ",coords:[[ -73.96063148975372 , 40.70924826276157 ], [ -73.94407279 , 40.70510918 ]]},
    {fromName: " Eastern Pkwy & Franklin Ave ",toName: " Classon Ave & St Marks Ave ",coords:[[ -73.9576801 , 40.6707767 ], [ -73.9596082 , 40.6765198 ]]},
    {fromName: " Atlantic Ave & Fort Greene Pl ",toName: " Fulton St & Waverly Ave ",coords:[[ -73.97632328 , 40.68382604 ], [ -73.96599590778351 , 40.683238654603414 ]]},
    {fromName: " Bayard St & Leonard St ",toName: " Berry St & N 8 St ",coords:[[ -73.94885390996933 , 40.71915571696044 ], [ -73.95852515 , 40.7190095 ]]},
    {fromName: " W 21 St & 6 Ave ",toName: " Lexington Ave & E 26 St ",coords:[[ -73.99415556 , 40.74173969 ], [ -73.983293 , 40.741459 ]]},
    {fromName: " North Moore St & Greenwich St ",toName: " Watts St & Greenwich St ",coords:[[ -74.0103006362915 , 40.72019521437465 ], [ -74.00965965 , 40.72405549 ]]},{fromName: " Suffolk St & Stanton St ",toName: " S 5 Pl & S 5 St ",coords:[[ -73.98517977 , 40.72066442 ], [ -73.960876 , 40.710451 ]]},
    {fromName: " E 93 St & 2 Ave ",toName: " E 88 St & Park Ave ",coords:[[ -73.9489196240902 , 40.782454175279874 ], [ -73.95595908164978 , 40.781410700190015 ]]},
    {fromName: " 31 St & 23 Ave ",toName: " 24 Ave & 29 St ",coords:[[ -73.9125551 , 40.7747878 ], [ -73.916142 , 40.7729 ]]},
    {fromName: " Broadway & W 29 St ",toName: " E 9 St & Avenue C ",coords:[[ -73.98855723 , 40.7462009 ], [ -73.97768752 , 40.72521311 ]]},
    {fromName: " E 11 St & 1 Ave ",toName: " E 30 St & Park Ave S ",coords:[[ -73.98426726 , 40.72953837 ], [ -73.98303529 , 40.74444921 ]]},
    {fromName: " W 12 St & W 4 St ",toName: " E 15 St & 3 Ave ",coords:[[ -74.00398269295692 , 40.73756121181137 ], [ -73.986923 , 40.734232 ]]},
    {fromName: " Suffolk St & Stanton St ",toName: " E 11 St & 2 Ave ",coords:[[ -73.98517977 , 40.72066442 ], [ -73.98672378 , 40.73047309 ]]},
    {fromName: " 44 Dr & 21 St ",toName: " 46 Ave & 5 St ",coords:[[ -73.9460927 , 40.748 ], [ -73.95451 , 40.74731 ]]},
    {fromName: " Lewis Ave & Kosciuszko St ",toName: " Marcus Garvey Blvd & Macon St ",coords:[[ -73.93705428 , 40.69237074 ], [ -73.938037 , 40.682601 ]]},
    {fromName: " E 4 St & 2 Ave ",toName: " Norfolk St & Broome St ",coords:[[ -73.98978041 , 40.7262807 ], [ -73.98802084 , 40.7172274 ]]},
    {fromName: " Driggs Ave & N 9 St ",toName: " Bedford Ave & Nassau Ave ",coords:[[ -73.95520135760307 , 40.71816969454208 ], [ -73.95212324 , 40.72311651 ]]},
    {fromName: " Metropolitan Ave & Meeker Ave ",toName: " Driggs Ave & N 9 St ",coords:[[ -73.95234386 , 40.71413311 ], [ -73.95520135760307 , 40.71816969454208 ]]},
    {fromName: " W 113 St & Broadway ",toName: " W 106 St & Amsterdam Ave ",coords:[[ -73.964928 , 40.805973 ], [ -73.9664492472 , 40.8008363 ]]},
    {fromName: " Harrison St & Hudson St ",toName: " West St & Chambers St ",coords:[[ -74.0090009 , 40.71870987 ], [ -74.01322069 , 40.71754834 ]]},
    {fromName: " E 25 St & 2 Ave ",toName: " Lexington Ave & E 26 St ",coords:[[ -73.97973776 , 40.73912601 ], [ -73.983293 , 40.741459 ]]},
    {fromName: " Amsterdam Ave & W 73 St ",toName: " Amsterdam Ave & W 79 St ",coords:[[ -73.98093044757842 , 40.77966809007312 ], [ -73.9786517 , 40.7829391 ]]},
    {fromName: " W 49 St & 8 Ave ",toName: " 9 Ave & W 22 St ",coords:[[ -73.98788205 , 40.76227205 ], [ -74.00197139 , 40.7454973 ]]},
    {fromName: " E 68 St & 3 Ave ",toName: " 1 Ave & E 62 St ",coords:[[ -73.96224617958069 , 40.76712840349542 ], [ -73.96094022 , 40.7612274 ]]},
    {fromName: " Lexington Ave & E 26 St ",toName: " W 55 St & 6 Ave ",coords:[[ -73.983293 , 40.741459 ], [ -73.9783501625061 , 40.76309387270797 ]]},
    {fromName: " Allen St & Rivington St ",toName: " Clinton St & Grand St ",coords:[[ -73.98997825 , 40.72019576 ], [ -73.9870295 , 40.71559509 ]]},
    {fromName: " E 9 St & Avenue C ",toName: " W 45 St & 8 Ave ",coords:[[ -73.97768752 , 40.72521311 ], [ -73.98859651 , 40.75929124 ]]},
    {fromName: " 1 Ave & E 18 St ",toName: " E 98 St & Park Ave ",coords:[[ -73.98054420948029 , 40.733812191966315 ], [ -73.95206 , 40.78813 ]]},
    {fromName: " S 5 Pl & S 5 St ",toName: " Suffolk St & Stanton St ",coords:[[ -73.960876 , 40.710451 ], [ -73.98517977 , 40.72066442 ]]},
    {fromName: " Grand St & Havemeyer St ",toName: " Rogers Ave & Sterling St ",coords:[[ -73.95698119 , 40.71286844 ], [ -73.9538746 , 40.6630619 ]]},
    {fromName: " 10 St & 5 Ave ",toName: " 2 Ave & 9 St ",coords:[[ -73.98700053 , 40.6686273 ], [ -73.99331394 , 40.6724811 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " John St & William St ",coords:[[ -73.9916 , 40.749156 ], [ -74.00722156 , 40.70862144 ]]},
    {fromName: " E 93 St & 2 Ave ",toName: " E 115 St & Madison Ave ",coords:[[ -73.9489196240902 , 40.782454175279874 ], [ -73.944846 , 40.7989445 ]]},
    {fromName: " Division St & Bowery ",toName: " Clinton St & Grand St ",coords:[[ -73.9970468 , 40.71413089 ], [ -73.9870295 , 40.71559509 ]]},
    {fromName: " Murray St & Greenwich St ",toName: " Park Pl & Church St ",coords:[[ -74.01122331619263 , 40.714851505262516 ], [ -74.00935515761375 , 40.71334184275907 ]]},
    {fromName: " W 16 St & 8 Ave ",toName: " Stagg St & Union Ave ",coords:[[ -74.001384973526 , 40.741021509002664 ], [ -73.95095259 , 40.70877084 ]]},
    {fromName: " Scholes St & Manhattan Ave ",toName: " Nostrand Ave & Myrtle Ave ",coords:[[ -73.9448625 , 40.70870368 ], [ -73.95238108 , 40.69527008 ]]},
    {fromName: " E 2 St & Avenue A ",toName: " E 2 St & Avenue B ",coords:[[ -73.98583620786667 , 40.72307749068673 ], [ -73.98368779 , 40.72217444 ]]},
    {fromName: " W 42 St & 8 Ave ",toName: " 11 Ave & W 41 St ",coords:[[ -73.99098507 , 40.7575699 ], [ -73.99884222 , 40.76030096 ]]},
    {fromName: " Clinton St & Union St ",toName: " Henry St & Atlantic Ave ",coords:[[ -73.99785267 , 40.6831164 ], [ -73.99612349 , 40.69089272 ]]},
    {fromName: " Franklin Ave & St Marks Ave ",toName: " Pacific St & Classon Ave ",coords:[[ -73.9561677 , 40.6758324 ], [ -73.9587903 , 40.6791944 ]]},
    {fromName: " Dean St & Hoyt St ",toName: " Lewis Ave & Decatur St ",coords:[[ -73.98759104 , 40.6864442 ], [ -73.934903 , 40.6814598 ]]},
    {fromName: " 9 Ave & W 45 St ",toName: " E 25 St & 2 Ave ",coords:[[ -73.9912551 , 40.76019252 ], [ -73.97973776 , 40.73912601 ]]},
    {fromName: " N 6 St & Bedford Ave ",toName: " Union Ave & Jackson St ",coords:[[ -73.95850939 , 40.71745169 ], [ -73.952029 , 40.7160751 ]]},
    {fromName: " Greenwich Ave & Charles St ",toName: " 1 Ave & E 18 St ",coords:[[ -74.000271 , 40.735238 ], [ -73.98054420948029 , 40.733812191966315 ]]},
    {fromName: " W 42 St & Dyer Ave ",toName: " W 27 St & 7 Ave ",coords:[[ -73.99379968643188 , 40.75898481399634 ], [ -73.993915 , 40.746647 ]]},
    {fromName: " E 7 St & Avenue A ",toName: " Norfolk St & Broome St ",coords:[[ -73.98379855 , 40.72621788 ], [ -73.98802084 , 40.7172274 ]]},
    {fromName: " Madison Ave & E 99 St ",toName: " E 88 St & Park Ave ",coords:[[ -73.95242929458618 , 40.78948541553215 ], [ -73.95595908164978 , 40.781410700190015 ]]},
    {fromName: " Barclay St & Church St ",toName: " Fulton St & Broadway ",coords:[[ -74.01020234 , 40.71291224 ], [ -74.009447 , 40.711066 ]]},
    {fromName: " E 47 St & Park Ave ",toName: " E 97 St & 3 Ave ",coords:[[ -73.97498696 , 40.75510267 ], [ -73.94860294 , 40.7859201 ]]},
    {fromName: " Rivington St & Ridge St ",toName: " Meserole Ave & Manhattan Ave ",coords:[[ -73.98329859 , 40.71850211 ], [ -73.95299117 , 40.72708584 ]]},
    {fromName: " Fulton St & Broadway ",toName: " Murray St & Greenwich St ",coords:[[ -74.009447 , 40.711066 ], [ -74.01122331619263 , 40.714851505262516 ]]},
    {fromName: " E 16 St & Irving Pl ",toName: " W 15 St & 7 Ave ",coords:[[ -73.98797392845154 , 40.735367055605394 ], [ -73.99931783 , 40.73935542 ]]},
    {fromName: " E 7 St & Avenue A ",toName: " Lafayette St & E 8 St ",coords:[[ -73.98379855 , 40.72621788 ], [ -73.99102628231049 , 40.73020660529954 ]]},
    {fromName: " W 13 St & 5 Ave ",toName: " W 41 St & 8 Ave ",coords:[[ -73.99431 , 40.735445 ], [ -73.9900262 , 40.75640548 ]]},
    {fromName: " Allen St & Stanton St ",toName: " E 20 St & FDR Drive ",coords:[[ -73.989111 , 40.722055 ], [ -73.97573881 , 40.73314259 ]]},
    {fromName: " W 16 St & 8 Ave ",toName: " 1 Ave & E 18 St ",coords:[[ -74.001384973526 , 40.741021509002664 ], [ -73.98054420948029 , 40.733812191966315 ]]},
    {fromName: " Graham Ave & Conselyea St ",toName: " E 7 St & Avenue A ",coords:[[ -73.944507 , 40.715143 ], [ -73.98379855 , 40.72621788 ]]},
    {fromName: " Division St & Bowery ",toName: " E 2 St & Avenue C ",coords:[[ -73.9970468 , 40.71413089 ], [ -73.98085795 , 40.7208736 ]]},
    {fromName: " NULL ",toName: " NULL ",coords:[[ -73.884 , 40.860 ], [ -73.881 , 40.857 ]]},
    {fromName: " W 22 St & 8 Ave ",toName: " W 24 St & 7 Ave ",coords:[[ -73.99915362 , 40.74475148 ], [ -73.99529885 , 40.74487634 ]]},
    {fromName: " Suffolk St & Stanton St ",toName: " E 2 St & Avenue B ",coords:[[ -73.98517977 , 40.72066442 ], [ -73.98368779 , 40.72217444 ]]},
    {fromName: " Coffey St & Conover St ",toName: " Leonard St & Church St ",coords:[[ -74.015665 , 40.677236 ], [ -74.005549 , 40.717571 ]]},
    {fromName: " E 24 St & Park Ave S ",toName: " E 16 St & Irving Pl ",coords:[[ -73.98602213 , 40.74096374 ], [ -73.98797392845154 , 40.735367055605394 ]]},
    {fromName: " Broadway & E 14 St ",toName: " 1 Ave & E 16 St ",coords:[[ -73.99074142 , 40.73454567 ], [ -73.98165557 , 40.73221853 ]]},
    {fromName: " 2 Ave & E 72 St ",toName: " W 82 St & Central Park West ",coords:[[ -73.95840793848038 , 40.7687620293096 ], [ -73.97137 , 40.78275 ]]},
    {fromName: " 27 St & Hunter St ",toName: " 28 St & 38 Ave ",coords:[[ -73.941275 , 40.7485 ], [ -73.934326 , 40.754876 ]]},
    {fromName: " Clinton Ave & Flushing Ave ",toName: " Carlton Ave & Flushing Ave ",coords:[[ -73.96986848 , 40.69794 ], [ -73.973736 , 40.697787 ]]},
    {fromName: " Mott St & Prince St ",toName: " Mercer St & Spring St ",coords:[[ -73.99480012 , 40.72317958 ], [ -73.99949601 , 40.72362738 ]]},
    {fromName: " Lexington Ave & E 29 St ",toName: " E 33 St & 1 Ave ",coords:[[ -73.98215353488922 , 40.74311555376486 ], [ -73.97449783980846 , 40.74322681432173 ]]},
    {fromName: " Bank St & Washington St ",toName: " E 7 St & Avenue A ",coords:[[ -74.00859207 , 40.7361967 ], [ -73.98379855 , 40.72621788 ]]},
    {fromName: " Carlton Ave & Flushing Ave ",toName: " Nassau St & Navy St ",coords:[[ -73.973736 , 40.697787 ], [ -73.98068914 , 40.69839895 ]]},
    {fromName: " Grand St & Elizabeth St ",toName: " Allen St & Hester St ",coords:[[ -73.99596 , 40.718822 ], [ -73.99190759 , 40.71605866 ]]},
    {fromName: " 34 Ave & 13 St ",toName: " Crescent St & 35 Ave ",coords:[[ -73.9364848 , 40.7638753 ], [ -73.9321455 , 40.7596276 ]]},
    {fromName: " W 55 St & 6 Ave ",toName: " W 31 St & 7 Ave ",coords:[[ -73.9783501625061 , 40.76309387270797 ], [ -73.9916 , 40.749156 ]]},
    {fromName: " Carmine St & 6 Ave ",toName: " Forsyth St & Broome St ",coords:[[ -74.00214988 , 40.73038599 ], [ -73.99266288 , 40.71893904 ]]},
    {fromName: " 1 Ave & E 16 St ",toName: " Suffolk St & Stanton St ",coords:[[ -73.98165557 , 40.73221853 ], [ -73.98517977 , 40.72066442 ]]},
    {fromName: " Grand St & Greene St ",toName: " Grand St & Elizabeth St ",coords:[[ -74.00234737 , 40.72165481 ], [ -73.99596 , 40.718822 ]]},
    {fromName: " E 32 St & Park Ave ",toName: " E 31 St & 3 Ave ",coords:[[ -73.98194829 , 40.7457121 ], [ -73.97966069 , 40.74394314 ]]},
    {fromName: " E 2 St & Avenue B ",toName: " St Marks Pl & 1 Ave ",coords:[[ -73.98368779 , 40.72217444 ], [ -73.98564945 , 40.72779126 ]]},
    {fromName: " E 88 St & Park Ave ",toName: " E 39 St & 3 Ave ",coords:[[ -73.95595908164978 , 40.781410700190015 ], [ -73.97604882 , 40.7489006 ]]},
    {fromName: " Park Ave & Marcus Garvey Blvd ",toName: " Myrtle Ave & Marcy Ave ",coords:[[ -73.941342 , 40.698617 ], [ -73.94954908 , 40.69539817 ]]},
    {fromName: " Vesey Pl & River Terrace ",toName: " Howard St & Centre St ",coords:[[ -74.01658354 , 40.7153379 ], [ -73.99973337 , 40.71910537 ]]},
    {fromName: " S 4 St & Wythe Ave ",toName: " E 9 St & Avenue C ",coords:[[ -73.96590294 , 40.71285887 ], [ -73.97768752 , 40.72521311 ]]},
    {fromName: " E 2 St & Avenue B ",toName: " Suffolk St & Stanton St ",coords:[[ -73.98368779 , 40.72217444 ], [ -73.98517977 , 40.72066442 ]]},
    {fromName: " E 85 St & York Ave ",toName: " E 85 St & York Ave ",coords:[[ -73.94803392 , 40.77536905 ], [ -73.94803392 , 40.77536905 ]]},
    {fromName: " St Marks Pl & 2 Ave ",toName: " Maiden Ln & Pearl St ",coords:[[ -73.98713956 , 40.7284186 ], [ -74.00731853 , 40.70706456 ]]},
    {fromName: " St Marks Pl & 2 Ave ",toName: " Maiden Ln & Pearl St ",coords:[[ -73.98713956 , 40.7284186 ], [ -74.00731853 , 40.70706456 ]]},
    {fromName: " Washington Ave & Park Ave ",toName: " Myrtle Ave & Marcy Ave ",coords:[[ -73.96751037 , 40.69610226 ], [ -73.94954908 , 40.69539817 ]]},
    {fromName: " E 2 St & 2 Ave ",toName: " Hope St & Union Ave ",coords:[[ -73.99069656 , 40.72502876 ], [ -73.95141312 , 40.71167351 ]]},
    {fromName: " W 4 St & 7 Ave S ",toName: " Bank St & Washington St ",coords:[[ -74.00293877 , 40.73401143 ], [ -74.00859207 , 40.7361967 ]]},
    {fromName: " S 4 St & Wythe Ave ",toName: " Broadway & Berry St ",coords:[[ -73.96590294 , 40.71285887 ], [ -73.96525063 , 40.71044554 ]]},
    {fromName: " 5 Ave & E 63 St ",toName: " 5 Ave & E 78 St ",coords:[[ -73.971518 , 40.766368 ], [ -73.96427392959595 , 40.77632142182271 ]]},
    {fromName: " E 72 St & York Ave ",toName: " E 81 St & York Ave ",coords:[[ -73.95348296 , 40.76663814 ], [ -73.94989233 , 40.7728384 ]]},
    {fromName: " Lenox Ave & W 117 St ",toName: " E 128 St & Madison Ave ",coords:[[ -73.9490782 , 40.8025566 ], [ -73.939182 , 40.80756 ]]},
    {fromName: " Howard St & Centre St ",toName: " Division St & Bowery ",coords:[[ -73.99973337 , 40.71910537 ], [ -73.9970468 , 40.71413089 ]]},
    {fromName: " NULL ",toName: " NULL ",coords:[[ -73.881 , 40.857 ], [ -73.890 , 40.857 ]]},
    {fromName: " St Johns Pl & Washington Ave ",toName: " Greene Ave & Nostrand Ave ",coords:[[ -73.9631611 , 40.6737236 ], [ -73.950916 , 40.6883337 ]]},
    {fromName: " E 33 St & 1 Ave ",toName: " E 31 St & 3 Ave ",coords:[[ -73.97449783980846 , 40.74322681432173 ], [ -73.97966069 , 40.74394314 ]]},
    {fromName: " University Pl & E 8 St ",toName: " St Nicholas Ave & Manhattan Ave ",coords:[[ -73.99490341544151 , 40.73143724085228 ], [ -73.953149 , 40.809725 ]]},
    {fromName: " NULL ",toName: " NULL ",coords:[[ -73.887 , 40.857 ], [ -73.881 , 40.857 ]]},
    {fromName: " St Marks Pl & 2 Ave ",toName: " Cleveland Pl & Spring St ",coords:[[ -73.98713956 , 40.7284186 ], [ -73.99724900722504 , 40.722103786686034 ]]},
    {fromName: " E 31 St & 3 Ave ",toName: " 6 Ave & W 33 St ",coords:[[ -73.97966069 , 40.74394314 ], [ -73.98848395 , 40.74901271 ]]},
    {fromName: " Suffolk St & Stanton St ",toName: " E 2 St & Avenue B ",coords:[[ -73.98517977 , 40.72066442 ], [ -73.98368779 , 40.72217444 ]]},
    {fromName: " MacDougal St & Washington Sq ",toName: " E 93 St & 2 Ave ",coords:[[ -73.99852205 , 40.73226398 ], [ -73.9489196240902 , 40.782454175279874 ]]},
    {fromName: " Columbia St & Rivington St ",toName: " Pitt St & Stanton St ",coords:[[ -73.98016555 , 40.71739973 ], [ -73.98178024 , 40.71926081 ]]},
    {fromName: " W 4 St & 7 Ave S ",toName: " W 16 St & 8 Ave ",coords:[[ -74.00293877 , 40.73401143 ], [ -74.001384973526 , 40.741021509002664 ]]},
    {fromName: " Suffolk St & Stanton St ",toName: " Allen St & Stanton St ",coords:[[ -73.98517977 , 40.72066442 ], [ -73.989111 , 40.722055 ]]},
    {fromName: " W 49 St & 8 Ave ",toName: " W 56 St & 10 Ave ",coords:[[ -73.98788205 , 40.76227205 ], [ -73.988639 , 40.768254 ]]},
    {fromName: " E 48 St & 3 Ave ",toName: " Broadway & W 37 St ",coords:[[ -73.971878855 , 40.7546011026 ], [ -73.98753523 , 40.75172632 ]]},
    {fromName: " W 18 St & 9 Ave ",toName: " W 27 St & 10 Ave ",coords:[[ -74.00367558002472 , 40.7435337324616 ], [ -74.00218427181244 , 40.75018156325683 ]]},
    {fromName: " 10 St & 7 Ave ",toName: " 14 St & 7 Ave ",coords:[[ -73.98199886 , 40.6662078 ], [ -73.98396846 , 40.663779 ]]},
    {fromName: " Pitt St & Stanton St ",toName: " Columbia St & Rivington St ",coords:[[ -73.98178024 , 40.71926081 ], [ -73.98016555 , 40.71739973 ]]},
    {fromName: " E 6 St & Avenue D ",toName: " Forsyth St & Broome St ",coords:[[ -73.97668709 , 40.72228087 ], [ -73.99266288 , 40.71893904 ]]},
    {fromName: " W 20 St & 7 Ave ",toName: " Cleveland Pl & Spring St ",coords:[[ -73.99726235 , 40.74238787 ], [ -73.99724900722504 , 40.722103786686034 ]]},
    {fromName: " E 6 St & Avenue B ",toName: " E 6 St & Avenue D ",coords:[[ -73.98185424 , 40.72453734 ], [ -73.97668709 , 40.72228087 ]]},
    {fromName: " Division St & Bowery ",toName: " Pershing Square North ",coords:[[ -73.9970468 , 40.71413089 ], [ -73.977706 , 40.751873 ]]},
    {fromName: " Lefferts Pl & Franklin Ave ",toName: " S Portland Ave & Hanson Pl ",coords:[[ -73.9557689392 , 40.680342423 ], [ -73.97431458 , 40.68539567 ]]},
    {fromName: " W 16 St & 8 Ave ",toName: " Avenue D & E 12 St ",coords:[[ -74.001384973526 , 40.741021509002664 ], [ -73.97422494 , 40.72580614 ]]},
    {fromName: " 10 St & 7 Ave ",toName: " 3 St & 7 Ave ",coords:[[ -73.98199886 , 40.6662078 ], [ -73.97839676 , 40.6703837 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " Grand Army Plaza & Central Park S ",coords:[[ -73.9916 , 40.749156 ], [ -73.97371465 , 40.7643971 ]]},
    {fromName: " Broadway & W 32 St ",toName: " 9 Ave & W 45 St ",coords:[[ -73.98808416 , 40.74854862 ], [ -73.9912551 , 40.76019252 ]]},
    {fromName: " E 9 St & Avenue C ",toName: " Norfolk St & Broome St ",coords:[[ -73.97768752 , 40.72521311 ], [ -73.98802084 , 40.7172274 ]]},
    {fromName: " 1 Ave & E 44 St ",toName: " W 24 St & 7 Ave ",coords:[[ -73.96905301 , 40.75001986 ], [ -73.99529885 , 40.74487634 ]]},
    {fromName: " NULL ",toName: " NULL ",coords:[[ -73.881 , 40.857 ], [ -73.905 , 40.863 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " W 27 St & 7 Ave ",coords:[[ -73.9916 , 40.749156 ], [ -73.993915 , 40.746647 ]]},
    {fromName: " W 27 St & 7 Ave ",toName: " E 25 St & 2 Ave ",coords:[[ -73.993915 , 40.746647 ], [ -73.97973776 , 40.73912601 ]]},
    {fromName: " Broadway & W 38 St ",toName: " MacDougal St & Prince St ",coords:[[ -73.98721619 , 40.75299641 ], [ -74.00297088 , 40.72710258 ]]},
    {fromName: " Lafayette St & E 8 St ",toName: " E 11 St & Avenue B ",coords:[[ -73.99102628231049 , 40.73020660529954 ], [ -73.97950418293476 , 40.72746420692392 ]]},{fromName: " W 27 St & 10 Ave ",toName: " W 37 St & 10 Ave ",coords:[[ -74.00218427181244 , 40.75018156325683 ], [ -73.9979009 , 40.75660359 ]]},
    {fromName: " W 4 St & 7 Ave S ",toName: " W 22 St & 10 Ave ",coords:[[ -74.00293877 , 40.73401143 ], [ -74.00451887 , 40.74691959 ]]},
    {fromName: " Lafayette St & E 8 St ",toName: " E 7 St & Avenue A ",coords:[[ -73.99102628231049 , 40.73020660529954 ], [ -73.98379855 , 40.72621788 ]]},
    {fromName: " W 45 St & 8 Ave ",toName: " 6 Ave & W 33 St ",coords:[[ -73.98859651 , 40.75929124 ], [ -73.98848395 , 40.74901271 ]]},
    {fromName: " W 87 St & Amsterdam Ave ",toName: " W 21 St & 6 Ave ",coords:[[ -73.9747 , 40.78839 ], [ -73.99415556 , 40.74173969 ]]},
    {fromName: " 9 Ave & W 28 St ",toName: " W 38 St & 8 Ave ",coords:[[ -73.99923384189606 , 40.74937024193277 ], [ -73.99138152 , 40.75466591 ]]},
    {fromName: " E 52 St & 2 Ave ",toName: " W 41 St & 8 Ave ",coords:[[ -73.967416 , 40.756014 ], [ -73.9900262 , 40.75640548 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " 8 Ave & W 33 St ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.993934 , 40.751551 ]]},
    {fromName: " Mott St & Prince St ",toName: " Graham Ave & Herbert St ",coords:[[ -73.99480012 , 40.72317958 ], [ -73.94500379 , 40.71929301 ]]},
    {fromName: " E 2 St & Avenue B ",toName: " E 11 St & Avenue B ",coords:[[ -73.98368779 , 40.72217444 ], [ -73.97950418293476 , 40.72746420692392 ]]},
    {fromName: " W 17 St & 9 Ave ",toName: " E 31 St & 3 Ave ",coords:[[ -74.00413691997528 , 40.74294891660091 ], [ -73.97966069 , 40.74394314 ]]},
    {fromName: " Allen St & Stanton St ",toName: " 6 Ave & W 33 St ",coords:[[ -73.989111 , 40.722055 ], [ -73.98848395 , 40.74901271 ]]},
    {fromName: " NULL ",toName: " NULL ",coords:[[ -73.905 , 40.863 ], [ -73.902 , 40.863 ]]},
    {fromName: " Carmine St & 6 Ave ",toName: " Watts St & Greenwich St ",coords:[[ -74.00214988 , 40.73038599 ], [ -74.00965965 , 40.72405549 ]]},
    {fromName: " Washington St & Gansevoort St ",toName: " Watts St & Greenwich St ",coords:[[ -74.008119 , 40.739323 ], [ -74.00965965 , 40.72405549 ]]},
    {fromName: " 1 Ave & E 16 St ",toName: " Bayard St & Baxter St ",coords:[[ -73.98165557 , 40.73221853 ], [ -73.99974372 , 40.71602118 ]]},
    {fromName: " 1 Ave & E 18 St ",toName: " W 95 St & Broadway ",coords:[[ -73.98054420948029 , 40.733812191966315 ], [ -73.971888 , 40.7937704 ]]},
    {fromName: " Fulton St & Broadway ",toName: " E 2 St & Avenue A ",coords:[[ -74.009447 , 40.711066 ], [ -73.98583620786667 , 40.72307749068673 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " 1 Ave & E 30 St ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " E 25 St & 2 Ave ",toName: " 5 Ave & E 29 St ",coords:[[ -73.97973776 , 40.73912601 ], [ -73.98683077 , 40.7451677 ]]},
    {fromName: " W 26 St & 10 Ave ",toName: " 11 Ave & W 41 St ",coords:[[ -74.002950346 , 40.749717753 ], [ -73.99884222 , 40.76030096 ]]},
    {fromName: " Smith St & 9 St ",toName: " Court St & Nelson St ",coords:[[ -73.99785768 , 40.6746957 ], [ -73.99869893 , 40.6763947 ]]},
    {fromName: " W 18 St & 9 Ave ",toName: " W 16 St & The High Line ",coords:[[ -74.00367558002472 , 40.7435337324616 ], [ -74.00681753 , 40.74334935 ]]},
    {fromName: " W 16 St & The High Line ",toName: " Broadway & Battery Pl ",coords:[[ -74.00681753 , 40.74334935 ], [ -74.01361706 , 40.70463334 ]]},
    {fromName: " Berkeley Pl & 7 Ave ",toName: " 7 Ave & Park Pl ",coords:[[ -73.97523209452629 , 40.675146838709786 ], [ -73.97324283 , 40.6776147 ]]},
    {fromName: " Mercer St & Bleecker St ",toName: " William St & Pine St ",coords:[[ -73.99662137031554 , 40.72706363348306 ], [ -74.00887308 , 40.70717936 ]]},
    {fromName: " Newtown Ave & 23 St ",toName: " Newton Rd & 44 St ",coords:[[ -73.9246145 , 40.7713615 ], [ -73.9142678 , 40.7595701 ]]},
    {fromName: " E 39 St & 2 Ave ",toName: " E 53 St & Madison Ave ",coords:[[ -73.9734419 , 40.74780373 ], [ -73.97402311 , 40.7597108 ]]},
    {fromName: " MacDougal St & Prince St ",toName: " E 39 St & 2 Ave ",coords:[[ -74.00297088 , 40.72710258 ], [ -73.9734419 , 40.74780373 ]]},
    {fromName: " W 38 St & 8 Ave ",toName: " W 41 St & 8 Ave ",coords:[[ -73.99138152 , 40.75466591 ], [ -73.9900262 , 40.75640548 ]]},
    {fromName: " E 116 St & 2 Ave ",toName: " E 84 St & 1 Ave ",coords:[[ -73.937261 , 40.796879 ], [ -73.95068615 , 40.77565541 ]]},
    {fromName: " N 15 St & Wythe Ave ",toName: " Greenpoint Ave & Manhattan Ave ",coords:[[ -73.955736 , 40.724055 ], [ -73.95394 , 40.73026 ]]},
    {fromName: " Mercer St & Bleecker St ",toName: " Broadway & W 25 St ",coords:[[ -73.99662137031554 , 40.72706363348306 ], [ -73.98918628692627 , 40.74286877312112 ]]},
    {fromName: " Pike St & Monroe St ",toName: " Lispenard St & Broadway ",coords:[[ -73.99193043 , 40.71173107 ], [ -74.00247214 , 40.71939226 ]]},
    {fromName: " Columbia St & Degraw St ",toName: " Bergen St & Smith St ",coords:[[ -74.00242364 , 40.6859296 ], [ -73.99063168 , 40.6867443 ]]},
    {fromName: " West St & Chambers St ",toName: " Centre St & Chambers St ",coords:[[ -74.01322069 , 40.71754834 ], [ -74.0046073 , 40.71273266 ]]},
    {fromName: " 1 Ave & E 62 St ",toName: " E 74 St & 1 Ave ",coords:[[ -73.96094022 , 40.7612274 ], [ -73.95482273 , 40.7689738 ]]},
    {fromName: " Graham Ave & Grand St ",toName: " Front St & Washington St ",coords:[[ -73.944024 , 40.711863 ], [ -73.98940236 , 40.70255088 ]]},
    {fromName: " Pershing Square North ",toName: " W 27 St & 10 Ave ",coords:[[ -73.977706 , 40.751873 ], [ -74.00218427181244 , 40.75018156325683 ]]},
    {fromName: " Jay St & Tech Pl ",toName: " Barclay St & Church St ",coords:[[ -73.987167 , 40.695065 ], [ -74.01020234 , 40.71291224 ]]},
    {fromName: " Washington Pl & Broadway ",toName: " Howard St & Centre St ",coords:[[ -73.99404649 , 40.72903917 ], [ -73.99973337 , 40.71910537 ]]},
    {fromName: " Carlton Ave & Park Ave ",toName: " Washington Ave & Park Ave ",coords:[[ -73.97355569 , 40.69580705 ], [ -73.96751037 , 40.69610226 ]]},
    {fromName: " 24 Ave & 26 St ",toName: " 31 St & 23 Ave ",coords:[[ -73.918544 , 40.774591 ], [ -73.9125551 , 40.7747878 ]]},
    {fromName: " Pershing Square North ",toName: " Riverside Dr & W 91 St ",coords:[[ -73.977706 , 40.751873 ], [ -73.97700369358063 , 40.79313480986663 ]]},
    {fromName: " Myrtle Ave & Marcy Ave ",toName: " Park Ave & Marcus Garvey Blvd ",coords:[[ -73.94954908 , 40.69539817 ], [ -73.941342 , 40.698617 ]]},
    {fromName: " Frederick Douglass Blvd & W 112 St ",toName: " W 106 St & Central Park West ",coords:[[ -73.957145 , 40.801694 ], [ -73.9605909006 , 40.7981856 ]]},
    {fromName: " W 106 St & Amsterdam Ave ",toName: " W 106 St & Amsterdam Ave ",coords:[[ -73.9664492472 , 40.8008363 ], [ -73.9664492472 , 40.8008363 ]]},
    {fromName: " Myrtle Ave & Lewis Ave ",toName: " Montrose Ave & Bushwick Ave ",coords:[[ -73.93756926 , 40.69681963 ], [ -73.94016171 , 40.70767788 ]]},
    {fromName: " 1 Ave & E 62 St ",toName: " W 33 St & 7 Ave ",coords:[[ -73.96094022 , 40.7612274 ], [ -73.99093085 , 40.75019995 ]]},
    {fromName: " 27 Ave & 9 St ",toName: " 31 Ave & Steinway St ",coords:[[ -73.9309134 , 40.7739825 ], [ -73.916916847229 , 40.761293897289086 ]]},
    {fromName: " University Pl & E 14 St ",toName: " LaGuardia Pl & W 3 St ",coords:[[ -73.99200509 , 40.73492695 ], [ -73.99810231 , 40.72917025 ]]},
    {fromName: " W 22 St & 8 Ave ",toName: " W 27 St & 7 Ave ",coords:[[ -73.99915362 , 40.74475148 ], [ -73.993915 , 40.746647 ]]},
    {fromName: " Union Ave & Jackson St ",toName: " Broadway & E 14 St ",coords:[[ -73.952029 , 40.7160751 ], [ -73.99074142 , 40.73454567 ]]},
    {fromName: " E 2 St & 2 Ave ",toName: " E 2 St & Avenue A ",coords:[[ -73.99069656 , 40.72502876 ], [ -73.98583620786667 , 40.72307749068673 ]]},
    {fromName: " W 27 St & 10 Ave ",toName: " Catherine St & Monroe St ",coords:[[ -74.00218427181244 , 40.75018156325683 ], [ -73.99682619 , 40.71117444 ]]},
    {fromName: " 1 Ave & E 18 St ",toName: " MacDougal St & Prince St ",coords:[[ -73.98054420948029 , 40.733812191966315 ], [ -74.00297088 , 40.72710258 ]]},
    {fromName: " Lincoln Pl & Classon Ave ",toName: " Eastern Pkwy & Franklin Ave ",coords:[[ -73.9609 , 40.6721683 ], [ -73.9576801 , 40.6707767 ]]},
    {fromName: " 5 Ave & E 29 St ",toName: " 1 Ave & E 30 St ",coords:[[ -73.98683077 , 40.7451677 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " Myrtle Ave & Lewis Ave ",toName: " Throop Ave & Myrtle Ave ",coords:[[ -73.93756926 , 40.69681963 ], [ -73.94371094 , 40.69622937 ]]},
    {fromName: " Kent Ave & N 7 St ",toName: " Greenpoint Ave & Manhattan Ave ",coords:[[ -73.96165072917938 , 40.72036775298455 ], [ -73.95394 , 40.73026 ]]},
    {fromName: " E 2 St & Avenue A ",toName: " Tompkins Ave & Hopkins St ",coords:[[ -73.98583620786667 , 40.72307749068673 ], [ -73.94708417 , 40.69957608 ]]},
    {fromName: " 1 Ave & E 68 St ",toName: " Columbus Ave & W 72 St ",coords:[[ -73.95818491 , 40.76500525 ], [ -73.97898475 , 40.7770575 ]]},
    {fromName: " Broadway & W 41 St ",toName: " W 43 St & 10 Ave ",coords:[[ -73.98658032 , 40.75513557 ], [ -73.99461843 , 40.76009437 ]]},
    {fromName: " Driggs Ave & N 9 St ",toName: " Bayard St & Leonard St ",coords:[[ -73.95520135760307 , 40.71816969454208 ], [ -73.94885390996933 , 40.71915571696044 ]]},
    {fromName: " South End Ave & Liberty St ",toName: " 6 Ave & Canal St ",coords:[[ -74.015756 , 40.711512 ], [ -74.00566443 , 40.72243797 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " W 20 St & 11 Ave ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " Washington Pl & Broadway ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.99404649 , 40.72903917 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " 12 Ave & W 40 St ",coords:[[ -73.993934 , 40.751551 ], [ -74.00277668 , 40.76087502 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " W 21 St & 6 Ave ",coords:[[ -73.9916 , 40.749156 ], [ -73.99415556 , 40.74173969 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " W 55 St & 6 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.9783501625061 , 40.76309387270797 ]]},
    {fromName: " E 43 St & 2 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -73.97121414 , 40.75022392 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " Avenue D & E 12 St ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97422494 , 40.72580614 ]]},
    {fromName: " 9 Ave & W 28 St ",toName: " W 20 St & 7 Ave ",coords:[[ -73.99923384189606 , 40.74937024193277 ], [ -73.99726235 , 40.74238787 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " E 24 St & Park Ave S ",coords:[[ -73.9916 , 40.749156 ], [ -73.98602213 , 40.74096374 ]]},
    {fromName: " 9 Ave & W 45 St ",toName: " W 37 St & 10 Ave ",coords:[[ -73.9912551 , 40.76019252 ], [ -73.9979009 , 40.75660359 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " E 27 St & 1 Ave ",coords:[[ -73.9916 , 40.749156 ], [ -73.976806 , 40.739445 ]]},
    {fromName: " E 65 St & 2 Ave ",toName: " 1 Ave & E 68 St ",coords:[[ -73.96222069859505 , 40.76471851944339 ], [ -73.95818491 , 40.76500525 ]]},
    {fromName: " W 37 St & 10 Ave ",toName: " 8 Ave & W 33 St ",coords:[[ -73.9979009 , 40.75660359 ], [ -73.993934 , 40.751551 ]]},
    {fromName: " Johnson St & Gold St ",toName: " DeKalb Ave & Hudson Ave ",coords:[[ -73.98362464 , 40.69474881 ], [ -73.981013 , 40.689888 ]]},
    {fromName: " Plaza St West & Flatbush Ave ",toName: " 10 St & 7 Ave ",coords:[[ -73.97111473 , 40.6750207 ], [ -73.98199886 , 40.6662078 ]]},
    {fromName: " E 109 St & 3 Ave ",toName: " 2 Ave & E 96 St ",coords:[[ -73.9432083 , 40.79329668 ], [ -73.9471673 , 40.7839636 ]]},
    {fromName: " 6 Ave & W 33 St ",toName: " Washington Pl & Broadway ",coords:[[ -73.98848395 , 40.74901271 ], [ -73.99404649 , 40.72903917 ]]},
    {fromName: " South End Ave & Liberty St ",toName: " Murray St & Greenwich St ",coords:[[ -74.015756 , 40.711512 ], [ -74.01122331619263 , 40.714851505262516 ]]},
    {fromName: " Centre St & Chambers St ",toName: " Leonard St & Church St ",coords:[[ -74.0046073 , 40.71273266 ], [ -74.005549 , 40.717571 ]]},
    {fromName: " 11 Ave & W 41 St ",toName: " 8 Ave & W 33 St ",coords:[[ -73.99884222 , 40.76030096 ], [ -73.993934 , 40.751551 ]]},
    {fromName: " Frederick Douglass Blvd & W 115 St ",toName: " St Nicholas Ave & Manhattan Ave ",coords:[[ -73.9559308 , 40.8038654 ], [ -73.953149 , 40.809725 ]]},
    {fromName: " E 75 St & 3 Ave ",toName: " Broadway & W 60 St ",coords:[[ -73.95772297 , 40.77112927 ], [ -73.98191841 , 40.76915505 ]]},
    {fromName: " E 81 St & York Ave ",toName: " 1 Ave & E 68 St ",coords:[[ -73.94989233 , 40.7728384 ], [ -73.95818491 , 40.76500525 ]]},
    {fromName: " Metropolitan Ave & Bedford Ave ",toName: " S 5 Pl & S 5 St ",coords:[[ -73.96024116 , 40.71534825 ], [ -73.960876 , 40.710451 ]]},
    {fromName: " W 43 St & 10 Ave ",toName: " 9 Ave & W 28 St ",coords:[[ -73.99461843 , 40.76009437 ], [ -73.99923384189606 , 40.74937024193277 ]]},
    {fromName: " E 19 St & 3 Ave ",toName: " University Pl & E 14 St ",coords:[[ -73.98473765 , 40.73624527 ], [ -73.99200509 , 40.73492695 ]]},
    {fromName: " 3 Ave & E 62 St ",toName: " 1 Ave & E 68 St ",coords:[[ -73.96526895 , 40.76312584 ], [ -73.95818491 , 40.76500525 ]]},
    {fromName: " 1 Ave & E 62 St ",toName: " Broadway & W 49 St ",coords:[[ -73.96094022 , 40.7612274 ], [ -73.9845272898674 , 40.76068327096592 ]]},
    {fromName: " 2 Ave & E 31 St ",toName: " Broadway & E 22 St ",coords:[[ -73.97706058 , 40.74290902 ], [ -73.98955109 , 40.7403432 ]]},
    {fromName: " Marcus Garvey Blvd & Macon St ",toName: " Marcy Ave & Lafayette Ave ",coords:[[ -73.938037 , 40.682601 ], [ -73.947915 , 40.6900815 ]]},
    {fromName: " E 5 St & Avenue C ",toName: " Cooper Square & Astor Pl ",coords:[[ -73.97995466 , 40.72299208 ], [ -73.99075269699097 , 40.72951496224949 ]]},
    {fromName: " Clinton St & Grand St ",toName: " Concord St & Bridge St ",coords:[[ -73.9870295 , 40.71559509 ], [ -73.98476437 , 40.69766564 ]]},
    {fromName: " Allen St & Stanton St ",toName: " Pike St & E Broadway ",coords:[[ -73.989111 , 40.722055 ], [ -73.99293911 , 40.71406667 ]]},
    {fromName: " E 25 St & 2 Ave ",toName: " Lexington Ave & E 26 St ",coords:[[ -73.97973776 , 40.73912601 ], [ -73.983293 , 40.741459 ]]},
    {fromName: " Avenue D & E 8 St ",toName: " W 11 St & 6 Ave ",coords:[[ -73.97574813 , 40.72368361 ], [ -73.99800419 , 40.73532427 ]]},
    {fromName: " Washington Pl & 6 Ave ",toName: " Cooper Square & Astor Pl ",coords:[[ -74.00026394 , 40.73224119 ], [ -73.99075269699097 , 40.72951496224949 ]]},
    {fromName: " Columbia St & Rivington St ",toName: " E 17 St & Broadway ",coords:[[ -73.98016555 , 40.71739973 ], [ -73.99009296 , 40.73704984 ]]},
    {fromName: " S 4 St & Wythe Ave ",toName: " N 6 St & Bedford Ave ",coords:[[ -73.96590294 , 40.71285887 ], [ -73.95850939 , 40.71745169 ]]},
    {fromName: " Myrtle Ave & Lewis Ave ",toName: " Myrtle Ave & Marcy Ave ",coords:[[ -73.93756926 , 40.69681963 ], [ -73.94954908 , 40.69539817 ]]},
    {fromName: " Norfolk St & Broome St ",toName: " Liberty St & Broadway ",coords:[[ -73.98802084 , 40.7172274 ], [ -74.01043382 , 40.70905623 ]]},
    {fromName: " E 91 St & 2 Ave ",toName: " 1 Ave & E 68 St ",coords:[[ -73.94965589046478 , 40.78112229934166 ], [ -73.95818491 , 40.76500525 ]]},
    {fromName: " W 54 St & 9 Ave ",toName: " E 47 St & Park Ave ",coords:[[ -73.98690506 , 40.76584941 ], [ -73.97498696 , 40.75510267 ]]},
    {fromName: " Cherry St ",toName: " E 27 St & 1 Ave ",coords:[[ -73.97948148 , 40.71219906 ], [ -73.976806 , 40.739445 ]]},
    {fromName: " W 27 St & 7 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -73.993915 , 40.746647 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " Clark St & Henry St ",toName: " Jay St & York St ",coords:[[ -73.99344559 , 40.69760127 ], [ -73.98672670125961 , 40.701403172577244 ]]},
    {fromName: " 2 Ave & E 31 St ",toName: " E 20 St & 2 Ave ",coords:[[ -73.97706058 , 40.74290902 ], [ -73.98205027 , 40.73587678 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " E 68 St & 3 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.96224617958069 , 40.76712840349542 ]]},
    {fromName: " E 20 St & FDR Drive ",toName: " W 20 St & 11 Ave ",coords:[[ -73.97573881 , 40.73314259 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " 1 Ave & E 78 St ",toName: " E 89 St & York Ave ",coords:[[ -73.9535166 , 40.77140426 ], [ -73.946041 , 40.7779453 ]]},
    {fromName: " Monroe St & Classon Ave ",toName: " Berkeley Pl & 7 Ave ",coords:[[ -73.95881081 , 40.6845683 ], [ -73.97523209452629 , 40.675146838709786 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " E 43 St & 5 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.98025184869766 , 40.754120810779256 ]]},
    {fromName: " Great Jones St ",toName: " Greenwich St & W Houston St ",coords:[[ -73.99379025 , 40.72743423 ], [ -74.008591 , 40.728846 ]]},
    {fromName: " Kent Ave & S 11 St ",toName: " Bedford Ave & Nassau Ave ",coords:[[ -73.96841526031494 , 40.707644944175705 ], [ -73.95212324 , 40.72311651 ]]},
    {fromName: " Henry St & Degraw St ",toName: " Court St & State St ",coords:[[ -73.99917254 , 40.6847514 ], [ -73.99203074 , 40.6902375 ]]},
    {fromName: " Carroll St & 6 Ave ",toName: " Stanton St & Chrystie St ",coords:[[ -73.9787282 , 40.6740886 ], [ -73.99147535 , 40.72229346 ]]},
    {fromName: " Johnson St & Gold St ",toName: " Front St & Washington St ",coords:[[ -73.98362464 , 40.69474881 ], [ -73.98940236 , 40.70255088 ]]},
    {fromName: " Grand St & Havemeyer St ",toName: " Metropolitan Ave & Bedford Ave ",coords:[[ -73.95698119 , 40.71286844 ], [ -73.96024116 , 40.71534825 ]]},
    {fromName: " Carroll St & 6 Ave ",toName: " 6 Ave & 12 St ",coords:[[ -73.9787282 , 40.6740886 ], [ -73.9854617 , 40.6663181 ]]},
    {fromName: " W 16 St & 8 Ave ",toName: " W 15 St & 10 Ave ",coords:[[ -74.001384973526 , 40.741021509002664 ], [ -74.00747358798981 , 40.742753828659026 ]]},
    {fromName: " Broadway & Berry St ",toName: " Broadway & Roebling St ",coords:[[ -73.96525063 , 40.71044554 ], [ -73.96063148975372 , 40.70924826276157 ]]},
    {fromName: " 14 St & 7 Ave ",toName: " 10 St & 5 Ave ",coords:[[ -73.98396846 , 40.663779 ], [ -73.98700053 , 40.6686273 ]]},
    {fromName: " E 9 St & Avenue C ",toName: " 1 Ave & E 16 St ",coords:[[ -73.97768752 , 40.72521311 ], [ -73.98165557 , 40.73221853 ]]},
    {fromName: " W 22 St & 8 Ave ",toName: " W 18 St & 6 Ave ",coords:[[ -73.99915362 , 40.74475148 ], [ -73.99456405 , 40.73971301 ]]},
    {fromName: " Myrtle Ave & St Edwards St ",toName: " Willoughby St & Fleet St ",coords:[[ -73.97703874 , 40.69327018 ], [ -73.9813018 , 40.69196566 ]]},
    {fromName: " University Pl & E 14 St ",toName: " Washington Pl & Broadway ",coords:[[ -73.99200509 , 40.73492695 ], [ -73.99404649 , 40.72903917 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 30 St & Park Ave S ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.98303529 , 40.74444921 ]]},
    {fromName: " E 23 St & 1 Ave ",toName: " E 24 St & Park Ave S ",coords:[[ -73.97809472 , 40.736502 ], [ -73.98602213 , 40.74096374 ]]},
    {fromName: " Metropolitan Ave & Bedford Ave ",toName: " N 12 St & Bedford Ave ",coords:[[ -73.96024116 , 40.71534825 ], [ -73.95484712 , 40.72079821 ]]},
    {fromName: " Gansevoort St & Hudson St ",toName: " W 20 St & 11 Ave ",coords:[[ -74.00507032871246 , 40.739448201304036 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 30 St & Park Ave S ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.98303529 , 40.74444921 ]]},
    {fromName: " E 2 St & 2 Ave ",toName: " Barclay St & Church St ",coords:[[ -73.99069656 , 40.72502876 ], [ -74.01020234 , 40.71291224 ]]},
    {fromName: " E 97 St & 3 Ave ",toName: " St Nicholas Ave & Manhattan Ave ",coords:[[ -73.94860294 , 40.7859201 ], [ -73.953149 , 40.809725 ]]},
    {fromName: " Berry St & N 8 St ",toName: " Huron St & Franklin St ",coords:[[ -73.95852515 , 40.7190095 ], [ -73.95826 , 40.73266 ]]},
    {fromName: " W 11 St & 6 Ave ",toName: " E 24 St & Park Ave S ",coords:[[ -73.99800419 , 40.73532427 ], [ -73.98602213 , 40.74096374 ]]},
    {fromName: " E 7 St & Avenue A ",toName: " Park Pl & Church St ",coords:[[ -73.98379855 , 40.72621788 ], [ -74.00935515761375 , 40.71334184275907 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " W 27 St & 7 Ave ",coords:[[ -73.9916 , 40.749156 ], [ -73.993915 , 40.746647 ]]},
    {fromName: " Crescent St & Ditmars Blvd ",toName: " 31 St & 23 Ave ",coords:[[ -73.9145645 , 40.7787185 ], [ -73.9125551 , 40.7747878 ]]},
    {fromName: " Grand Army Plaza & Plaza St West ",toName: " Union St & 4 Ave ",coords:[[ -73.97087984 , 40.6729679 ], [ -73.98282002 , 40.6772744 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 72 St & York Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.95348296 , 40.76663814 ]]},
    {fromName: " E 30 St & Park Ave S ",toName: " Broadway & E 22 St ",coords:[[ -73.98303529 , 40.74444921 ], [ -73.98955109 , 40.7403432 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " E 19 St & 3 Ave ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -73.98473765 , 40.73624527 ]]},
    {fromName: " W 53 St & 10 Ave ",toName: " Amsterdam Ave & W 73 St ",coords:[[ -73.99061728 , 40.76669671 ], [ -73.98093044757842 , 40.77966809007312 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " 9 Ave & W 45 St ",coords:[[ -73.993934 , 40.751551 ], [ -73.9912551 , 40.76019252 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " W 44 St & 5 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.98014437 , 40.75500254 ]]},
    {fromName: " W 16 St & The High Line ",toName: " W 16 St & 8 Ave ",coords:[[ -74.00681753 , 40.74334935 ], [ -74.001384973526 , 40.741021509002664 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " W 18 St & 9 Ave ",coords:[[ -73.993934 , 40.751551 ], [ -74.00367558002472 , 40.7435337324616 ]]},
    {fromName: " W 16 St & 8 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -74.001384973526 , 40.741021509002664 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " Lafayette St & E 8 St ",toName: " E 9 St & Avenue C ",coords:[[ -73.99102628231049 , 40.73020660529954 ], [ -73.97768752 , 40.72521311 ]]},
    {fromName: " 5 Ave & 3 St ",toName: " Atlantic Ave & Fort Greene Pl ",coords:[[ -73.98352355 , 40.6728155 ], [ -73.97632328 , 40.68382604 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " E 48 St & 5 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.97805914282799 , 40.75724567911726 ]]},
    {fromName: " Clermont Ave & Park Ave ",toName: " Front St & Washington St ",coords:[[ -73.97129668 , 40.69573398 ], [ -73.98940236 , 40.70255088 ]]},
    {fromName: " W 20 St & 7 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -73.99726235 , 40.74238787 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " E 114 St & 1 Ave ",toName: " E 72 St & York Ave ",coords:[[ -73.9362541 , 40.7945663 ], [ -73.95348296 , 40.76663814 ]]},
    {fromName: " E 85 St & York Ave ",toName: " W 55 St & 6 Ave ",coords:[[ -73.94803392 , 40.77536905 ], [ -73.9783501625061 , 40.76309387270797 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 47 St & Park Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97498696 , 40.75510267 ]]},
    {fromName: " W 16 St & 8 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -74.001384973526 , 40.741021509002664 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " President St & Henry St ",toName: " Douglass St & 3 Ave ",coords:[[ -73.99990419 , 40.6828003 ], [ -73.98432695 , 40.6802133 ]]},
    {fromName: " Suffolk St & Stanton St ",toName: " Lispenard St & Broadway ",coords:[[ -73.98517977 , 40.72066442 ], [ -74.00247214 , 40.71939226 ]]},
    {fromName: " St James Pl & Oliver St ",toName: " Court St & State St ",coords:[[ -73.99851193 , 40.71307916 ], [ -73.99203074 , 40.6902375 ]]},
    {fromName: " W 21 St & 6 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -73.99415556 , 40.74173969 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " Kent Ave & N 7 St ",toName: " Murray St & West St ",coords:[[ -73.96165072917938 , 40.72036775298455 ], [ -74.013012 , 40.7149787 ]]},
    {fromName: " Bergen St & Smith St ",toName: " Hanson Pl & Ashland Pl ",coords:[[ -73.99063168 , 40.6867443 ], [ -73.97790759801863 , 40.68506807308177 ]]},
    {fromName: " Christopher St & Greenwich St ",toName: " Mercer St & Bleecker St ",coords:[[ -74.00711384 , 40.73291553 ], [ -73.99662137031554 , 40.72706363348306 ]]},
    {fromName: " Canal St & Rutgers St ",toName: " E 2 St & 2 Ave ",coords:[[ -73.98990025 , 40.71427487 ], [ -73.99069656 , 40.72502876 ]]},
    {fromName: " Broadway & W 122 St ",toName: " Morningside Dr & Amsterdam Ave ",coords:[[ -73.9612547 , 40.8120562 ], [ -73.95736455917358 , 40.81028506306003 ]]},
    {fromName: " E 16 St & Irving Pl ",toName: " W 18 St & 6 Ave ",coords:[[ -73.98797392845154 , 40.735367055605394 ], [ -73.99456405 , 40.73971301 ]]},
    {fromName: " E 11 St & 2 Ave ",toName: " Liberty St & Broadway ",coords:[[ -73.98672378 , 40.73047309 ], [ -74.01043382 , 40.70905623 ]]},
    {fromName: " 11 Ave & W 27 St ",toName: " Allen St & Stanton St ",coords:[[ -74.005226 , 40.751396 ], [ -73.989111 , 40.722055 ]]},
    {fromName: " Amsterdam Ave & W 79 St ",toName: " Columbus Ave & W 72 St ",coords:[[ -73.9786517 , 40.7829391 ], [ -73.97898475 , 40.7770575 ]]},
    {fromName: " W 15 St & 7 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -73.99931783 , 40.73935542 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " W 20 St & 8 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -74.00004031 , 40.74345335 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " 2 Ave & E 72 St ",toName: " E 55 St & 2 Ave ",coords:[[ -73.95840793848038 , 40.7687620293096 ], [ -73.96603308 , 40.75797322 ]]},
    {fromName: " W 16 St & 8 Ave ",toName: " W 20 St & 7 Ave ",coords:[[ -74.001384973526 , 40.741021509002664 ], [ -73.99726235 , 40.74238787 ]]},
    {fromName: " W 25 St & 6 Ave ",toName: " W 22 St & 10 Ave ",coords:[[ -73.99144871 , 40.74395411 ], [ -74.00451887 , 40.74691959 ]]},
    {fromName: " Duffield St & Willoughby St ",toName: " Dean St & 4 Ave ",coords:[[ -73.9842844 , 40.69221589 ], [ -73.97895137 , 40.68312489 ]]},
    {fromName: " Morningside Dr & Amsterdam Ave ",toName: " 40 Ave & 9 St ",coords:[[ -73.95736455917358 , 40.81028506306003 ], [ -73.945133 , 40.75742 ]]},
    {fromName: " Columbia St & Rivington St ",toName: " Avenue C & E 18 St ",coords:[[ -73.98016555 , 40.71739973 ], [ -73.973984 , 40.730563 ]]},
    {fromName: " Avenue D & E 3 St ",toName: " Norfolk St & Broome St ",coords:[[ -73.97793172 , 40.72082834 ], [ -73.98802084 , 40.7172274 ]]},
    {fromName: " Carroll St & 6 Ave ",toName: " Dean St & 4 Ave ",coords:[[ -73.9787282 , 40.6740886 ], [ -73.97895137 , 40.68312489 ]]},
    {fromName: " Metropolitan Ave & Meeker Ave ",toName: " Metropolitan Ave & Bedford Ave ",coords:[[ -73.95234386 , 40.71413311 ], [ -73.96024116 , 40.71534825 ]]},
    {fromName: " W 15 St & 7 Ave ",toName: " W 21 St & 6 Ave ",coords:[[ -73.99931783 , 40.73935542 ], [ -73.99415556 , 40.74173969 ]]},
    {fromName: " Clinton St & Joralemon St ",toName: " Douglass St & 3 Ave ",coords:[[ -73.99337909 , 40.69239502 ], [ -73.98432695 , 40.6802133 ]]},
    {fromName: " Plaza St West & Flatbush Ave ",toName: " 10 St & 7 Ave ",coords:[[ -73.97111473 , 40.6750207 ], [ -73.98199886 , 40.6662078 ]]},
    {fromName: " W 110 St & Amsterdam Ave ",toName: " Park Ave & E 124 St ",coords:[[ -73.96295 , 40.802692 ], [ -73.9396861 , 40.8045555 ]]},
    {fromName: " 1 Ave & E 18 St ",toName: " Broadway & W 25 St ",coords:[[ -73.98054420948029 , 40.733812191966315 ], [ -73.98918628692627 , 40.74286877312112 ]]},
    {fromName: " 9 Ave & W 45 St ",toName: " W 47 St & 10 Ave ",coords:[[ -73.9912551 , 40.76019252 ], [ -73.99301222 , 40.76269882 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " W 15 St & 6 Ave ",coords:[[ -73.9916 , 40.749156 ], [ -73.99642959237099 , 40.738046142482766 ]]},
    {fromName: " Amsterdam Ave & W 73 St ",toName: " Riverside Dr & W 82 St ",coords:[[ -73.98093044757842 , 40.77966809007312 ], [ -73.98128127 , 40.78720869 ]]},
    {fromName: " E 91 St & Park Ave ",toName: " E 97 St & Madison Ave ",coords:[[ -73.955327 , 40.7835016 ], [ -73.953559 , 40.787801 ]]},
    {fromName: " 1 Ave & E 110 St ",toName: " 2 Ave & E 96 St ",coords:[[ -73.9383 , 40.7923272 ], [ -73.9471673 , 40.7839636 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " Grand Army Plaza & Central Park S ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97371465 , 40.7643971 ]]},
    {fromName: " W 53 St & 10 Ave ",toName: " E 47 St & Park Ave ",coords:[[ -73.99061728 , 40.76669671 ], [ -73.97498696 , 40.75510267 ]]},
    {fromName: " St Johns Pl & Washington Ave ",toName: " Berkeley Pl & 7 Ave ",coords:[[ -73.9631611 , 40.6737236 ], [ -73.97523209452629 , 40.675146838709786 ]]},
    {fromName: " Sullivan St & Washington Sq ",toName: " Lafayette St & E 8 St ",coords:[[ -73.99906065 , 40.73047747 ], [ -73.99102628231049 , 40.73020660529954 ]]},
    {fromName: " E 33 St & 1 Ave ",toName: " E 39 St & 3 Ave ",coords:[[ -73.97449783980846 , 40.74322681432173 ], [ -73.97604882 , 40.7489006 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " E 58 St & 3 Ave ",coords:[[ -73.9916 , 40.749156 ], [ -73.96724467 , 40.76095756 ]]},
    {fromName: " W 43 St & 10 Ave ",toName: " Columbus Ave & W 72 St ",coords:[[ -73.99461843 , 40.76009437 ], [ -73.97898475 , 40.7770575 ]]},
    {fromName: " 36 Ave & 31 St ",toName: " 35 Ave & 37 St ",coords:[[ -73.92957486212252 , 40.75651272984955 ], [ -73.9236611 , 40.7557327 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " 1 Ave & E 44 St ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.96905301 , 40.75001986 ]]},
    {fromName: " Murray St & West St ",toName: " Lispenard St & Broadway ",coords:[[ -74.013012 , 40.7149787 ], [ -74.00247214 , 40.71939226 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " W 52 St & 6 Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97982001304626 , 40.76132983124814 ]]},
    {fromName: " Central Park S & 6 Ave ",toName: " E 55 St & Lexington Ave ",coords:[[ -73.97634151 , 40.76590936 ], [ -73.97031366 , 40.75968085 ]]},
    {fromName: " E 47 St & Park Ave ",toName: " Broadway & W 60 St ",coords:[[ -73.97498696 , 40.75510267 ], [ -73.98191841 , 40.76915505 ]]},
    {fromName: " Carroll St & Bond St ",toName: " Douglass St & 3 Ave ",coords:[[ -73.99037292 , 40.6786115 ], [ -73.98432695 , 40.6802133 ]]},
    {fromName: " Avenue D & E 12 St ",toName: " Avenue D & E 12 St ",coords:[[ -73.97422494 , 40.72580614 ], [ -73.97422494 , 40.72580614 ]]},
    {fromName: " Willoughby Ave & Walworth St ",toName: " Bond St & Fulton St ",coords:[[ -73.95381995 , 40.69331716 ], [ -73.98304268717766 , 40.68962188790333 ]]},
    {fromName: " Prospect Pl & Underhill Ave ",toName: " Berkeley Pl & 7 Ave ",coords:[[ -73.96579 , 40.6769694 ], [ -73.97523209452629 , 40.675146838709786 ]]},
    {fromName: " Peck Slip & Front St ",toName: " Fulton St & Broadway ",coords:[[ -74.00167 , 40.707873 ], [ -74.009447 , 40.711066 ]]},
    {fromName: " Bayard St & Leonard St ",toName: " Metropolitan Ave & Bedford Ave ",coords:[[ -73.94885390996933 , 40.71915571696044 ], [ -73.96024116 , 40.71534825 ]]},
    {fromName: " E 72 St & York Ave ",toName: " E 89 St & York Ave ",coords:[[ -73.95348296 , 40.76663814 ], [ -73.946041 , 40.7779453 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 39 St & 2 Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.9734419 , 40.74780373 ]]},
    {fromName: " W 27 St & 7 Ave ",toName: " W 24 St & 7 Ave ",coords:[[ -73.993915 , 40.746647 ], [ -73.99529885 , 40.74487634 ]]},
    {fromName: " West Thames St ",toName: " Vesey Pl & River Terrace ",coords:[[ -74.01713445 , 40.70834698 ], [ -74.01658354 , 40.7153379 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " W 44 St & 5 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.98014437 , 40.75500254 ]]},
    {fromName: " Hancock St & Bedford Ave ",toName: " Park Ave & Marcus Garvey Blvd ",coords:[[ -73.95399026 , 40.68216564 ], [ -73.941342 , 40.698617 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " E 27 St & 1 Ave ",coords:[[ -73.9916 , 40.749156 ], [ -73.976806 , 40.739445 ]]},
    {fromName: " W 38 St & 8 Ave ",toName: " W 34 St & 11 Ave ",coords:[[ -73.99138152 , 40.75466591 ], [ -74.0021163 , 40.75594159 ]]},
    {fromName: " Liberty St & Broadway ",toName: " Park Pl & Church St ",coords:[[ -74.01043382 , 40.70905623 ], [ -74.00935515761375 , 40.71334184275907 ]]},
    {fromName: " 6 Ave & W 33 St ",toName: " 5 Ave & E 29 St ",coords:[[ -73.98848395 , 40.74901271 ], [ -73.98683077 , 40.7451677 ]]},
    {fromName: " Rivington St & Ridge St ",toName: " Cleveland Pl & Spring St ",coords:[[ -73.98329859 , 40.71850211 ], [ -73.99724900722504 , 40.722103786686034 ]]},
    {fromName: " Pike St & E Broadway ",toName: " E 7 St & Avenue A ",coords:[[ -73.99293911 , 40.71406667 ], [ -73.98379855 , 40.72621788 ]]},
    {fromName: " 14 St & 5 Ave ",toName: " Berkeley Pl & 7 Ave ",coords:[[ -73.98895053 , 40.666287 ], [ -73.97523209452629 , 40.675146838709786 ]]},
    {fromName: " S 3 St & Bedford Ave ",toName: " N 6 St & Bedford Ave ",coords:[[ -73.96264403 , 40.71260486 ], [ -73.95850939 , 40.71745169 ]]},
    {fromName: " Metropolitan Ave & Bedford Ave ",toName: " 5 Ave & E 29 St ",coords:[[ -73.96024116 , 40.71534825 ], [ -73.98683077 , 40.7451677 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " W 44 St & 5 Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.98014437 , 40.75500254 ]]},
    {fromName: " W 84 St & Columbus Ave ",toName: " W 95 St & Broadway ",coords:[[ -73.97283406 , 40.78499979 ], [ -73.971888 , 40.7937704 ]]},
    {fromName: " E 6 St & Avenue D ",toName: " Suffolk St & Stanton St ",coords:[[ -73.97668709 , 40.72228087 ], [ -73.98517977 , 40.72066442 ]]},
    {fromName: " 5 Ave & 3 St ",toName: " Schermerhorn St & Court St ",coords:[[ -73.98352355 , 40.6728155 ], [ -73.99183362722397 , 40.69102925677968 ]]},
    {fromName: " 48 Ave & 5 St ",toName: " Vernon Blvd & 47 Rd ",coords:[[ -73.9558732509613 , 40.744363287066875 ], [ -73.9534573 , 40.7449067 ]]},
    {fromName: " E 48 St & 5 Ave ",toName: " Broadway & W 49 St ",coords:[[ -73.97805914282799 , 40.75724567911726 ], [ -73.9845272898674 , 40.76068327096592 ]]},
    {fromName: " St James Pl & Oliver St ",toName: " Park Pl & Church St ",coords:[[ -73.99851193 , 40.71307916 ], [ -74.00935515761375 , 40.71334184275907 ]]},
    {fromName: " Cambridge Pl & Gates Ave ",toName: " Monroe St & Bedford Ave ",coords:[[ -73.96304 , 40.68488 ], [ -73.95380904 , 40.6851443 ]]},
    {fromName: " E 19 St & 3 Ave ",toName: " Pershing Square South ",coords:[[ -73.98473765 , 40.73624527 ], [ -73.97791 , 40.751581 ]]},
    {fromName: " W 43 St & 10 Ave ",toName: " Broadway & W 49 St ",coords:[[ -73.99461843 , 40.76009437 ], [ -73.9845272898674 , 40.76068327096592 ]]},
    {fromName: " Great Jones St ",toName: " Greenwich Ave & Charles St ",coords:[[ -73.99379025 , 40.72743423 ], [ -74.000271 , 40.735238 ]]},
    {fromName: " E 33 St & 1 Ave ",toName: " E 11 St & 2 Ave ",coords:[[ -73.97449783980846 , 40.74322681432173 ], [ -73.98672378 , 40.73047309 ]]},
    {fromName: " Columbia St & Kane St ",toName: " Commerce St & Van Brunt St ",coords:[[ -74.0016256 , 40.68763155 ], [ -74.00860912 , 40.6812117 ]]},
    {fromName: " Vesey Pl & River Terrace ",toName: " Little West St & 1 Pl ",coords:[[ -74.01658354 , 40.7153379 ], [ -74.01677685 , 40.70569254 ]]},
    {fromName: " Bialystoker Pl & Delancey St ",toName: " South St & Gouverneur Ln ",coords:[[ -73.98261206 , 40.71622644 ], [ -74.00670227 , 40.70355377 ]]},
    {fromName: " 2 Ave & E 96 St ",toName: " E 81 St & 2 Ave ",coords:[[ -73.9471673 , 40.7839636 ], [ -73.95427465438843 , 40.774779448957275 ]]},
    {fromName: " Hanson Pl & Ashland Pl ",toName: " 5 St & Market St ",coords:[[ -73.97790759801863 , 40.68506807308177 ], [ -73.97440128028393 , 40.699997484388504 ]]},{fromName: " Eastern Pkwy & Franklin Ave ",toName: " Carroll St & Franklin Ave ",coords:[[ -73.9576801 , 40.6707767 ], [ -73.9588 , 40.6679411 ]]},
    {fromName: " Barclay St & Church St ",toName: " Fulton St & Broadway ",coords:[[ -74.01020234 , 40.71291224 ], [ -74.009447 , 40.711066 ]]},
    {fromName: " E 88 St & Park Ave ",toName: " Riverside Dr & W 104 St ",coords:[[ -73.95595908164978 , 40.781410700190015 ], [ -73.9711457439 , 40.8013434 ]]},
    {fromName: " Hanson Pl & Ashland Pl ",toName: " Clinton Ave & Flushing Ave ",coords:[[ -73.97790759801863 , 40.68506807308177 ], [ -73.96986848 , 40.69794 ]]},
    {fromName: " E 20 St & FDR Drive ",toName: " 3 Ave & E 71 St ",coords:[[ -73.97573881 , 40.73314259 ], [ -73.96119945 , 40.76873687 ]]},
    {fromName: " Broadway & W 32 St ",toName: " E 27 St & 1 Ave ",coords:[[ -73.98808416 , 40.74854862 ], [ -73.976806 , 40.739445 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " W 44 St & 5 Ave ",coords:[[ -73.993934 , 40.751551 ], [ -73.98014437 , 40.75500254 ]]},
    {fromName: " West End Ave & W 94 St ",toName: " 3 Ave & E 95 St ",coords:[[ -73.974124 , 40.7941654 ], [ -73.94968539476395 , 40.784596798848916 ]]},
    {fromName: " St Nicholas Ave & Manhattan Ave ",toName: " Frederick Douglass Blvd & W 115 St ",coords:[[ -73.953149 , 40.809725 ], [ -73.9559308 , 40.8038654 ]]},
    {fromName: " E 72 St & York Ave ",toName: " E 77 St & 3 Ave ",coords:[[ -73.95348296 , 40.76663814 ], [ -73.95856158 , 40.77314236 ]]},
    {fromName: " W 42 St & 8 Ave ",toName: " W 52 St & 11 Ave ",coords:[[ -73.99098507 , 40.7575699 ], [ -73.99392888 , 40.76727216 ]]},
    {fromName: " DeKalb Ave & Hudson Ave ",toName: " Clinton Ave & Flushing Ave ",coords:[[ -73.981013 , 40.689888 ], [ -73.96986848 , 40.69794 ]]},
    {fromName: " 2 Ave & E 72 St ",toName: " E 72 St & York Ave ",coords:[[ -73.95840793848038 , 40.7687620293096 ], [ -73.95348296 , 40.76663814 ]]},
    {fromName: " W 15 St & 7 Ave ",toName: " Great Jones St ",coords:[[ -73.99931783 , 40.73935542 ], [ -73.99379025 , 40.72743423 ]]},
    {fromName: " Fulton St & Waverly Ave ",toName: " Fulton St & Rockwell Pl ",coords:[[ -73.96599590778351 , 40.683238654603414 ], [ -73.979382 , 40.688226 ]]},
    {fromName: " W 42 St & Dyer Ave ",toName: " W 52 St & 11 Ave ",coords:[[ -73.99379968643188 , 40.75898481399634 ], [ -73.99392888 , 40.76727216 ]]},
    {fromName: " 31 Ave & Steinway St ",toName: " 34 Ave & 38 St ",coords:[[ -73.916916847229 , 40.761293897289086 ], [ -73.921631 , 40.756913 ]]},
    {fromName: " Cliff St & Fulton St ",toName: " Reade St & Broadway ",coords:[[ -74.00504082441329 , 40.70831794366396 ], [ -74.00562789 , 40.71450451 ]]},
    {fromName: " South End Ave & Liberty St ",toName: " South St & Gouverneur Ln ",coords:[[ -74.015756 , 40.711512 ], [ -74.00670227 , 40.70355377 ]]},
    {fromName: " E 6 St & Avenue B ",toName: " W 15 St & 6 Ave ",coords:[[ -73.98185424 , 40.72453734 ], [ -73.99642959237099 , 40.738046142482766 ]]},
    {fromName: " W 22 St & 10 Ave ",toName: " Broadway & E 22 St ",coords:[[ -74.00451887 , 40.74691959 ], [ -73.98955109 , 40.7403432 ]]},
    {fromName: " W 52 St & 11 Ave ",toName: " W 42 St & Dyer Ave ",coords:[[ -73.99392888 , 40.76727216 ], [ -73.99379968643188 , 40.75898481399634 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " W 44 St & 5 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.98014437 , 40.75500254 ]]},
    {fromName: " Reade St & Broadway ",toName: " Henry St & Poplar St ",coords:[[ -74.00562789 , 40.71450451 ], [ -73.991454 , 40.700469 ]]},
    {fromName: " 46 Ave & 5 St ",toName: " Vernon Blvd & 50 Ave ",coords:[[ -73.95451 , 40.74731 ], [ -73.95411749 , 40.74232744 ]]},
    {fromName: " E 68 St & Madison Ave ",toName: " E 67 St & Park Ave ",coords:[[ -73.96703464 , 40.7691572 ], [ -73.96592080593109 , 40.76780080148132 ]]},
    {fromName: " E 58 St & 1 Ave (NE Corner) ",toName: " E 55 St & 2 Ave ",coords:[[ -73.96226227283478 , 40.75892386377695 ], [ -73.96603308 , 40.75797322 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " 1 Ave & E 30 St ",coords:[[ -73.9916 , 40.749156 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " Central Park West & W 72 St ",toName: " Central Park West & W 68 St ",coords:[[ -73.9762057363987 , 40.77579376683666 ], [ -73.97782542 , 40.7734066 ]]},
    {fromName: " W 34 St & 11 Ave ",toName: " W 24 St & 7 Ave ",coords:[[ -74.0021163 , 40.75594159 ], [ -73.99529885 , 40.74487634 ]]},
    {fromName: " 9 Ave & W 45 St ",toName: " W 44 St & 5 Ave ",coords:[[ -73.9912551 , 40.76019252 ], [ -73.98014437 , 40.75500254 ]]},
    {fromName: " E 47 St & Park Ave ",toName: " W 49 St & 8 Ave ",coords:[[ -73.97498696 , 40.75510267 ], [ -73.98788205 , 40.76227205 ]]},
    {fromName: " 1 Ave & E 110 St ",toName: " 2 Ave & E 96 St ",coords:[[ -73.9383 , 40.7923272 ], [ -73.9471673 , 40.7839636 ]]},
    {fromName: " W 52 St & 6 Ave ",toName: " Broadway & W 53 St ",coords:[[ -73.97982001304626 , 40.76132983124814 ], [ -73.98268129 , 40.76344058 ]]},
    {fromName: " W 82 St & Central Park West ",toName: " E 59 St & Madison Ave ",coords:[[ -73.97137 , 40.78275 ], [ -73.97109243 , 40.76350532 ]]},
    {fromName: " Concord St & Bridge St ",toName: " Front St & Washington St ",coords:[[ -73.98476437 , 40.69766564 ], [ -73.98940236 , 40.70255088 ]]},
    {fromName: " Johnson St & Gold St ",toName: " Fulton St & Adams St ",coords:[[ -73.98362464 , 40.69474881 ], [ -73.98949474096298 , 40.692418292578466 ]]},
    {fromName: " E 30 St & Park Ave S ",toName: " 11 Ave & W 27 St ",coords:[[ -73.98303529 , 40.74444921 ], [ -74.005226 , 40.751396 ]]},
    {fromName: " Pike St & Monroe St ",toName: " Madison St & Montgomery St ",coords:[[ -73.99193043 , 40.71173107 ], [ -73.984844 , 40.713126 ]]},
    {fromName: " E 102 St & 1 Ave ",toName: " 2 Ave & E 96 St ",coords:[[ -73.94164802 , 40.7869946 ], [ -73.9471673 , 40.7839636 ]]},
    {fromName: " Jay St & York St ",toName: " Division St & Bowery ",coords:[[ -73.98672670125961 , 40.701403172577244 ], [ -73.9970468 , 40.71413089 ]]},
    {fromName: " Franklin Ave & Myrtle Ave ",toName: " DeKalb Ave & Hudson Ave ",coords:[[ -73.95801365375519 , 40.694546087246025 ], [ -73.981013 , 40.689888 ]]},
    {fromName: " Pershing Square North ",toName: " E 33 St & 1 Ave ",coords:[[ -73.977706 , 40.751873 ], [ -73.97449783980846 , 40.74322681432173 ]]},
    {fromName: " St James Pl & Oliver St ",toName: " Franklin St & W Broadway ",coords:[[ -73.99851193 , 40.71307916 ], [ -74.00666661 , 40.71911552 ]]},
    {fromName: " LaGuardia Pl & W 3 St ",toName: " Broadway & E 14 St ",coords:[[ -73.99810231 , 40.72917025 ], [ -73.99074142 , 40.73454567 ]]},
    {fromName: " E 32 St & Park Ave ",toName: " 5 Ave & E 29 St ",coords:[[ -73.98194829 , 40.7457121 ], [ -73.98683077 , 40.7451677 ]]},
    {fromName: " Monroe St & Bedford Ave ",toName: " Macon St & Nostrand Ave ",coords:[[ -73.95380904 , 40.6851443 ], [ -73.9500479759 , 40.6809833854 ]]},
    {fromName: " Richards St & Delavan St ",toName: " Van Brunt St & Van Dyke St ",coords:[[ -74.00785041 , 40.6794327 ], [ -74.01472628116608 , 40.6758329439129 ]]},
    {fromName: " Nassau Ave & Russell St ",toName: " Meserole Ave & Manhattan Ave ",coords:[[ -73.94434 , 40.72557 ], [ -73.95299117 , 40.72708584 ]]},
    {fromName: " W 42 St & 8 Ave ",toName: " E 58 St & 3 Ave ",coords:[[ -73.99098507 , 40.7575699 ], [ -73.96724467 , 40.76095756 ]]},
    {fromName: " William St & Pine St ",toName: " Murray St & West St ",coords:[[ -74.00887308 , 40.70717936 ], [ -74.013012 , 40.7149787 ]]},
    {fromName: " West Thames St ",toName: " Vesey Pl & River Terrace ",coords:[[ -74.01713445 , 40.70834698 ], [ -74.01658354 , 40.7153379 ]]},
    {fromName: " Central Park West & W 102 St ",toName: " E 43 St & 5 Ave ",coords:[[ -73.96186 , 40.795346 ], [ -73.98025184869766 , 40.754120810779256 ]]},
    {fromName: " E 2 St & Avenue B ",toName: " E 4 St & 2 Ave ",coords:[[ -73.98368779 , 40.72217444 ], [ -73.98978041 , 40.7262807 ]]},
    {fromName: " W 74 St & Columbus Ave ",toName: " E 27 St & 1 Ave ",coords:[[ -73.97754961 , 40.7785669 ], [ -73.976806 , 40.739445 ]]},
    {fromName: " Sterling Pl & Bedford Ave ",toName: " Monroe St & Bedford Ave ",coords:[[ -73.954131 , 40.672695 ], [ -73.95380904 , 40.6851443 ]]},
    {fromName: " Henry St & Grand St ",toName: " Norfolk St & Broome St ",coords:[[ -73.981346 , 40.714215 ], [ -73.98802084 , 40.7172274 ]]},
    {fromName: " DeKalb Ave & Vanderbilt Ave ",toName: " Front St & Washington St ",coords:[[ -73.96885458 , 40.68940747 ], [ -73.98940236 , 40.70255088 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " W 43 St & 6 Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.98316936 , 40.75527307 ]]},
    {fromName: " E 55 St & 2 Ave ",toName: " E 20 St & 2 Ave ",coords:[[ -73.96603308 , 40.75797322 ], [ -73.98205027 , 40.73587678 ]]},
    {fromName: " LaGuardia Pl & W 3 St ",toName: " Washington Pl & Broadway ",coords:[[ -73.99810231 , 40.72917025 ], [ -73.99404649 , 40.72903917 ]]},
    {fromName: " Pulaski St & Marcus Garvey Blvd ",toName: " Lorimer St & Broadway ",coords:[[ -73.939877 , 40.6933982 ], [ -73.94818595 , 40.70411791 ]]},
    {fromName: " Broadway & E 14 St ",toName: " W 20 St & 7 Ave ",coords:[[ -73.99074142 , 40.73454567 ], [ -73.99726235 , 40.74238787 ]]},
    {fromName: " Allen St & Rivington St ",toName: " St Marks Pl & 2 Ave ",coords:[[ -73.98997825 , 40.72019576 ], [ -73.98713956 , 40.7284186 ]]},
    {fromName: " South St & Gouverneur Ln ",toName: " North Moore St & Greenwich St ",coords:[[ -74.00670227 , 40.70355377 ], [ -74.0103006362915 , 40.72019521437465 ]]},
    {fromName: " DeKalb Ave & Vanderbilt Ave ",toName: " Front St & Washington St ",coords:[[ -73.96885458 , 40.68940747 ], [ -73.98940236 , 40.70255088 ]]},
    {fromName: " 2 Ave & E 96 St ",toName: " Madison Ave & E 99 St ",coords:[[ -73.9471673 , 40.7839636 ], [ -73.95242929458618 , 40.78948541553215 ]]},
    {fromName: " West St & Chambers St ",toName: " North Moore St & Greenwich St ",coords:[[ -74.01322069 , 40.71754834 ], [ -74.0103006362915 , 40.72019521437465 ]]},
    {fromName: " W 37 St & 10 Ave ",toName: " 11 Ave & W 27 St ",coords:[[ -73.9979009 , 40.75660359 ], [ -74.005226 , 40.751396 ]]},
    {fromName: " Cadman Plaza West & Montague St ",toName: " Carroll St & Smith St ",coords:[[ -73.990539 , 40.69383 ], [ -73.99475825 , 40.680611 ]]},
    {fromName: " 7 St & 5 Ave ",toName: " 6 St & 7 Ave ",coords:[[ -73.98541675 , 40.6704922 ], [ -73.97988067 , 40.6686627 ]]},
    {fromName: " Forsyth St & Broome St ",toName: " E 11 St & 2 Ave ",coords:[[ -73.99266288 , 40.71893904 ], [ -73.98672378 , 40.73047309 ]]},
    {fromName: " Myrtle Ave & Lewis Ave ",toName: " Park Ave & Marcus Garvey Blvd ",coords:[[ -73.93756926 , 40.69681963 ], [ -73.941342 , 40.698617 ]]},
    {fromName: " Monroe St & Tompkins Ave ",toName: " Tompkins Ave & Hopkins St ",coords:[[ -73.944694 , 40.686203 ], [ -73.94708417 , 40.69957608 ]]},
    {fromName: " 11 Ave & W 41 St ",toName: " Broadway & W 38 St ",coords:[[ -73.99884222 , 40.76030096 ], [ -73.98721619 , 40.75299641 ]]},
    {fromName: " Barclay St & Church St ",toName: " North Moore St & Greenwich St ",coords:[[ -74.01020234 , 40.71291224 ], [ -74.0103006362915 , 40.72019521437465 ]]},
    {fromName: " 1 Ave & E 62 St ",toName: " W 33 St & 7 Ave ",coords:[[ -73.96094022 , 40.7612274 ], [ -73.99093085 , 40.75019995 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " W 52 St & 5 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.97648516 , 40.75992262 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " Lafayette St & E 8 St ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -73.99102628231049 , 40.73020660529954 ]]},
    {fromName: " Pierrepont St & Monroe Pl ",toName: " Court St & State St ",coords:[[ -73.99344027042389 , 40.69535693320225 ], [ -73.99203074 , 40.6902375 ]]},
    {fromName: " E 53 St & 3 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -73.96930575370789 , 40.75763227739443 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " W 84 St & Columbus Ave ",toName: " W 63 St & Broadway ",coords:[[ -73.97283406 , 40.78499979 ], [ -73.98261428 , 40.77163851 ]]},
    {fromName: " E 72 St & York Ave ",toName: " E 72 St & York Ave ",coords:[[ -73.95348296 , 40.76663814 ], [ -73.95348296 , 40.76663814 ]]},
    {fromName: " 6 Ave & 9 St ",toName: " 14 St & 7 Ave ",coords:[[ -73.98377641 , 40.668127 ], [ -73.98396846 , 40.663779 ]]},
    {fromName: " Pershing Square North ",toName: " Broadway & W 25 St ",coords:[[ -73.977706 , 40.751873 ], [ -73.98918628692627 , 40.74286877312112 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " Pershing Square North ",coords:[[ -73.993934 , 40.751551 ], [ -73.977706 , 40.751873 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " W 52 St & 6 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.97982001304626 , 40.76132983124814 ]]},
    {fromName: " Watts St & Greenwich St ",toName: " Barclay St & Church St ",coords:[[ -74.00965965 , 40.72405549 ], [ -74.01020234 , 40.71291224 ]]},
    {fromName: " Washington Park ",toName: " Cumberland St & Lafayette Ave ",coords:[[ -73.9737299 , 40.6917823 ], [ -73.97265183 , 40.68753406 ]]},
    {fromName: " Broadway & E 14 St ",toName: " Allen St & Stanton St ",coords:[[ -73.99074142 , 40.73454567 ], [ -73.989111 , 40.722055 ]]},
    {fromName: " 1 Ave & E 94 St ",toName: " E 72 St & York Ave ",coords:[[ -73.94594 , 40.7817212 ], [ -73.95348296 , 40.76663814 ]]},
    {fromName: " 9 Ave & W 22 St ",toName: " W 20 St & 11 Ave ",coords:[[ -74.00197139 , 40.7454973 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " 6 Ave & W 33 St ",toName: " W 55 St & 6 Ave ",coords:[[ -73.98848395 , 40.74901271 ], [ -73.9783501625061 , 40.76309387270797 ]]},
    {fromName: " Kent Ave & N 7 St ",toName: " Broadway & Roebling St ",coords:[[ -73.96165072917938 , 40.72036775298455 ], [ -73.96063148975372 , 40.70924826276157 ]]},{fromName: " Perry St & Bleecker St ",toName: " Carmine St & 6 Ave ",coords:[[ -74.00483091 , 40.73535398 ], [ -74.00214988 , 40.73038599 ]]},
    {fromName: " Washington Pl & Broadway ",toName: " 1 Ave & E 18 St ",coords:[[ -73.99404649 , 40.72903917 ], [ -73.98054420948029 , 40.733812191966315 ]]},
    {fromName: " Pershing Square North ",toName: " 2 Ave & E 31 St ",coords:[[ -73.977706 , 40.751873 ], [ -73.97706058 , 40.74290902 ]]},
    {fromName: " University Pl & E 14 St ",toName: " E 25 St & 2 Ave ",coords:[[ -73.99200509 , 40.73492695 ], [ -73.97973776 , 40.73912601 ]]},
    {fromName: " 6 St & 7 Ave ",toName: " Carlton Ave & Flushing Ave ",coords:[[ -73.97988067 , 40.6686627 ], [ -73.973736 , 40.697787 ]]},
    {fromName: " Vernon Blvd & 41 Rd ",toName: " 44 Dr & 21 St ",coords:[[ -73.9485678 , 40.7552433 ], [ -73.9460927 , 40.748 ]]},
    {fromName: " Duane St & Greenwich St ",toName: " Murray St & West St ",coords:[[ -74.0104554 , 40.71748752 ], [ -74.013012 , 40.7149787 ]]},
    {fromName: " Park Ave & Marcus Garvey Blvd ",toName: " Willoughby St & Fleet St ",coords:[[ -73.941342 , 40.698617 ], [ -73.9813018 , 40.69196566 ]]},
    {fromName: " Henry St & Grand St ",toName: " Pike St & E Broadway ",coords:[[ -73.981346 , 40.714215 ], [ -73.99293911 , 40.71406667 ]]},
    {fromName: " W 42 St & 8 Ave ",toName: " E 59 St & Madison Ave ",coords:[[ -73.99098507 , 40.7575699 ], [ -73.97109243 , 40.76350532 ]]},
    {fromName: " Washington Pl & Broadway ",toName: " University Pl & E 14 St ",coords:[[ -73.99404649 , 40.72903917 ], [ -73.99200509 , 40.73492695 ]]},
    {fromName: " W 24 St & 7 Ave ",toName: " E 17 St & Broadway ",coords:[[ -73.99529885 , 40.74487634 ], [ -73.99009296 , 40.73704984 ]]},
    {fromName: " E 118 St & Madison Ave ",toName: " E 123 St & Lexington Ave ",coords:[[ -73.9442507 , 40.8014866 ], [ -73.9379 , 40.8029263 ]]},
    {fromName: " Forsyth St & Canal St ",toName: " Carlton Ave & Park Ave ",coords:[[ -73.99422366 , 40.7158155 ], [ -73.97355569 , 40.69580705 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " 2 Ave & E 31 St ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97706058 , 40.74290902 ]]},
    {fromName: " Sullivan St & Washington Sq ",toName: " E 32 St & Park Ave ",coords:[[ -73.99906065 , 40.73047747 ], [ -73.98194829 , 40.7457121 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " Pershing Square North ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.977706 , 40.751873 ]]},
    {fromName: " E 47 St & Park Ave ",toName: " W 53 St & 10 Ave ",coords:[[ -73.97498696 , 40.75510267 ], [ -73.99061728 , 40.76669671 ]]},
    {fromName: " E 6 St & Avenue D ",toName: " Great Jones St ",coords:[[ -73.97668709 , 40.72228087 ], [ -73.99379025 , 40.72743423 ]]},
    {fromName: " University Pl & E 14 St ",toName: " Franklin St & W Broadway ",coords:[[ -73.99200509 , 40.73492695 ], [ -74.00666661 , 40.71911552 ]]},
    {fromName: " Catherine St & Monroe St ",toName: " Centre St & Worth St ",coords:[[ -73.99682619 , 40.71117444 ], [ -74.00234482 , 40.71494807 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " W 52 St & 6 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.97982001304626 , 40.76132983124814 ]]},
    {fromName: " Vesey Pl & River Terrace ",toName: " Hudson St & Reade St ",coords:[[ -74.01658354 , 40.7153379 ], [ -74.0091059 , 40.71625008 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " W 55 St & 6 Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.9783501625061 , 40.76309387270797 ]]},
    {fromName: " W 49 St & 8 Ave ",toName: " 9 Ave & W 45 St ",coords:[[ -73.98788205 , 40.76227205 ], [ -73.9912551 , 40.76019252 ]]},
    {fromName: " DeKalb Ave & S Portland Ave ",toName: " DeKalb Ave & Hudson Ave ",coords:[[ -73.97493121 , 40.68981035 ], [ -73.981013 , 40.689888 ]]},
    {fromName: " 1 Ave & E 16 St ",toName: " E 32 St & Park Ave ",coords:[[ -73.98165557 , 40.73221853 ], [ -73.98194829 , 40.7457121 ]]},
    {fromName: " W 67 St & Broadway ",toName: " Amsterdam Ave & W 73 St ",coords:[[ -73.98266566 , 40.77492513 ], [ -73.98093044757842 , 40.77966809007312 ]]},
    {fromName: " South End Ave & Liberty St ",toName: " Murray St & Greenwich St ",coords:[[ -74.015756 , 40.711512 ], [ -74.01122331619263 , 40.714851505262516 ]]},
    {fromName: " Hicks St & Montague St ",toName: " Cadman Plaza West & Montague St ",coords:[[ -73.99595065 , 40.69512845 ], [ -73.990539 , 40.69383 ]]},
    {fromName: " W 42 St & Dyer Ave ",toName: " W 52 St & 5 Ave ",coords:[[ -73.99379968643188 , 40.75898481399634 ], [ -73.97648516 , 40.75992262 ]]},
    {fromName: " Division Ave & Marcy Ave ",toName: " Boerum St & Broadway ",coords:[[ -73.95796783 , 40.70708701 ], [ -73.94976519 , 40.70538077 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " E 55 St & 3 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.96865397691727 , 40.758996559605116 ]]},
    {fromName: " Centre St & Chambers St ",toName: " North Moore St & Greenwich St ",coords:[[ -74.0046073 , 40.71273266 ], [ -74.0103006362915 , 40.72019521437465 ]]},
    {fromName: " Broadway & W 41 St ",toName: " 6 Ave & W 33 St ",coords:[[ -73.98658032 , 40.75513557 ], [ -73.98848395 , 40.74901271 ]]},
    {fromName: " E 43 St & 2 Ave ",toName: " W 37 St & 5 Ave ",coords:[[ -73.97121414 , 40.75022392 ], [ -73.98338988 , 40.75038009 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " E 48 St & 3 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.971878855 , 40.7546011026 ]]},
    {fromName: " N 6 St & Bedford Ave ",toName: " South St & Gouverneur Ln ",coords:[[ -73.95850939 , 40.71745169 ], [ -74.00670227 , 40.70355377 ]]},
    {fromName: " S 3 St & Bedford Ave ",toName: " N 6 St & Bedford Ave ",coords:[[ -73.96264403 , 40.71260486 ], [ -73.95850939 , 40.71745169 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " W 37 St & 5 Ave ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -73.98338988 , 40.75038009 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " 1 Ave & E 44 St ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.96905301 , 40.75001986 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " W 53 St & 10 Ave ",coords:[[ -73.993934 , 40.751551 ], [ -73.99061728 , 40.76669671 ]]},
    {fromName: " 11 Ave & W 59 St ",toName: " W 52 St & 5 Ave ",coords:[[ -73.99046033620834 , 40.77149671054441 ], [ -73.97648516 , 40.75992262 ]]},
    {fromName: " E 81 St & 2 Ave ",toName: " E 85 St & York Ave ",coords:[[ -73.95427465438843 , 40.774779448957275 ], [ -73.94803392 , 40.77536905 ]]},
    {fromName: " E 58 St & 1 Ave (NE Corner) ",toName: " E 55 St & 2 Ave ",coords:[[ -73.96226227283478 , 40.75892386377695 ], [ -73.96603308 , 40.75797322 ]]},
    {fromName: " Van Brunt St & Wolcott St ",toName: " Clinton St & Joralemon St ",coords:[[ -74.01275056 , 40.6773429 ], [ -73.99337909 , 40.69239502 ]]},
    {fromName: " Adelphi St & Myrtle Ave ",toName: " Cumberland St & Lafayette Ave ",coords:[[ -73.97178913 , 40.69308257 ], [ -73.97265183 , 40.68753406 ]]},
    {fromName: " Hicks St & Montague St ",toName: " Court St & State St ",coords:[[ -73.99595065 , 40.69512845 ], [ -73.99203074 , 40.6902375 ]]},
    {fromName: " E 2 St & Avenue A ",toName: " Great Jones St ",coords:[[ -73.98583620786667 , 40.72307749068673 ], [ -73.99379025 , 40.72743423 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " Madison St & Montgomery St ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.984844 , 40.713126 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " 11 Ave & W 27 St ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -74.005226 , 40.751396 ]]},
    {fromName: " Old Fulton St ",toName: " Front St & Washington St ",coords:[[ -73.99383605 , 40.70277159 ], [ -73.98940236 , 40.70255088 ]]},
    {fromName: " MacDougal St & Prince St ",toName: " W 11 St & 6 Ave ",coords:[[ -74.00297088 , 40.72710258 ], [ -73.99800419 , 40.73532427 ]]},
    {fromName: " E 102 St & 1 Ave ",toName: " E 103 St & Lexington Ave ",coords:[[ -73.94164802 , 40.7869946 ], [ -73.94755757 , 40.7903051 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " Lexington Ave & E 26 St ",coords:[[ -73.9916 , 40.749156 ], [ -73.983293 , 40.741459 ]]},
    {fromName: " E 6 St & Avenue D ",toName: " Spruce St & Nassau St ",coords:[[ -73.97668709 , 40.72228087 ], [ -74.00552427 , 40.71146364 ]]},
    {fromName: " Avenue D & E 8 St ",toName: " E 5 St & Avenue C ",coords:[[ -73.97574813 , 40.72368361 ], [ -73.97995466 , 40.72299208 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " Broadway & W 41 St ",coords:[[ -73.993934 , 40.751551 ], [ -73.98658032 , 40.75513557 ]]},
    {fromName: " W 74 St & Columbus Ave ",toName: " Amsterdam Ave & W 73 St ",coords:[[ -73.97754961 , 40.7785669 ], [ -73.98093044757842 , 40.77966809007312 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " E 41 St & Madison Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.97992193698882 , 40.752165280621966 ]]},
    {fromName: " W 76 St & Columbus Ave ",toName: " W 59 St & 10 Ave ",coords:[[ -73.97728532552719 , 40.7801839724239 ], [ -73.988038 , 40.770513 ]]},
    {fromName: " Lispenard St & Broadway ",toName: " North Moore St & Greenwich St ",coords:[[ -74.00247214 , 40.71939226 ], [ -74.0103006362915 , 40.72019521437465 ]]},{fromName: " E 74 St & 1 Ave ",toName: " W 59 St & 10 Ave ",coords:[[ -73.95482273 , 40.7689738 ], [ -73.988038 , 40.770513 ]]},
    {fromName: " Garfield Pl & 8 Ave ",toName: " 7 Ave & Park Pl ",coords:[[ -73.97484126 , 40.6711978 ], [ -73.97324283 , 40.6776147 ]]},
    {fromName: " E 91 St & 2 Ave ",toName: " Madison Ave & E 99 St ",coords:[[ -73.94965589046478 , 40.78112229934166 ], [ -73.95242929458618 , 40.78948541553215 ]]},
    {fromName: " W 42 St & 8 Ave ",toName: " E 58 St & 3 Ave ",coords:[[ -73.99098507 , 40.7575699 ], [ -73.96724467 , 40.76095756 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " W 44 St & 5 Ave ",coords:[[ -73.993934 , 40.751551 ], [ -73.98014437 , 40.75500254 ]]},
    {fromName: " Columbus Ave & W 72 St ",toName: " E 27 St & 1 Ave ",coords:[[ -73.97898475 , 40.7770575 ], [ -73.976806 , 40.739445 ]]},
    {fromName: " Hanson Pl & Ashland Pl ",toName: " 3 St & 3 Ave ",coords:[[ -73.97790759801863 , 40.68506807308177 ], [ -73.98775226 , 40.6750705 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " W 44 St & 5 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.98014437 , 40.75500254 ]]},
    {fromName: " W 64 St & Thelonious Monk Circle ",toName: " W 42 St & 8 Ave ",coords:[[ -73.98918695747852 , 40.77515953434235 ], [ -73.99098507 , 40.7575699 ]]},
    {fromName: " Hanson Pl & Ashland Pl ",toName: " 3 St & 3 Ave ",coords:[[ -73.97790759801863 , 40.68506807308177 ], [ -73.98775226 , 40.6750705 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " E 48 St & 5 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.97805914282799 , 40.75724567911726 ]]},
    {fromName: " Greenpoint Ave & Manhattan Ave ",toName: " Franklin St & Dupont St ",coords:[[ -73.95394 , 40.73026 ], [ -73.95866 , 40.73564 ]]},
    {fromName: " E 5 St & Avenue C ",toName: " Liberty St & Broadway ",coords:[[ -73.97995466 , 40.72299208 ], [ -74.01043382 , 40.70905623 ]]},
    {fromName: " Underhill Ave & Lincoln Pl ",toName: " Lafayette Ave & Fort Greene Pl ",coords:[[ -73.9671457 , 40.6740123 ], [ -73.976682 , 40.68691865 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " E 55 St & 3 Ave ",coords:[[ -73.993934 , 40.751551 ], [ -73.96865397691727 , 40.758996559605116 ]]},
    {fromName: " Lewis Ave & Madison St ",toName: " Fulton St & Utica Ave ",coords:[[ -73.935775 , 40.686312 ], [ -73.9298911 , 40.6794268 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " 11 Ave & W 59 St ",coords:[[ -73.993934 , 40.751551 ], [ -73.99046033620834 , 40.77149671054441 ]]},
    {fromName: " 1 Ave & E 78 St ",toName: " E 51 St & Lexington Ave ",coords:[[ -73.9535166 , 40.77140426 ], [ -73.97207836 , 40.75714758 ]]},
    {fromName: " Dean St & 4 Ave ",toName: " 3 St & 3 Ave ",coords:[[ -73.97895137 , 40.68312489 ], [ -73.98775226 , 40.6750705 ]]},
    {fromName: " 31 Ave & 30 St ",toName: " 31 St & Astoria Blvd ",coords:[[ -73.9240312 , 40.7647 ], [ -73.9184057 , 40.7699176 ]]},
    {fromName: " E 13 St & Avenue A ",toName: " Cooper Square & Astor Pl ",coords:[[ -73.98067966103554 , 40.72966729392978 ], [ -73.99075269699097 , 40.72951496224949 ]]},
    {fromName: " E 2 St & 2 Ave ",toName: " Cooper Square & Astor Pl ",coords:[[ -73.99069656 , 40.72502876 ], [ -73.99075269699097 , 40.72951496224949 ]]},
    {fromName: " W 15 St & 6 Ave ",toName: " E 98 St & Park Ave ",coords:[[ -73.99642959237099 , 40.738046142482766 ], [ -73.95206 , 40.78813 ]]},
    {fromName: " E 75 St & 3 Ave ",toName: " E 58 St & 1 Ave (NE Corner) ",coords:[[ -73.95772297 , 40.77112927 ], [ -73.96226227283478 , 40.75892386377695 ]]},
    {fromName: " Lafayette Ave & Fort Greene Pl ",toName: " Schermerhorn St & Bond St ",coords:[[ -73.976682 , 40.68691865 ], [ -73.98451656103134 , 40.688417427540834 ]]},
    {fromName: " W 26 St & 8 Ave ",toName: " 11 Ave & W 27 St ",coords:[[ -73.99723551 , 40.74734825 ], [ -74.005226 , 40.751396 ]]},
    {fromName: " E 2 St & 2 Ave ",toName: " Cooper Square & Astor Pl ",coords:[[ -73.99069656 , 40.72502876 ], [ -73.99075269699097 , 40.72951496224949 ]]},
    {fromName: " W 44 St & 5 Ave ",toName: " W 52 St & 11 Ave ",coords:[[ -73.98014437 , 40.75500254 ], [ -73.99392888 , 40.76727216 ]]},
    {fromName: " E 9 St & Avenue C ",toName: " 1 Ave & E 16 St ",coords:[[ -73.97768752 , 40.72521311 ], [ -73.98165557 , 40.73221853 ]]},
    {fromName: " E 6 St & Avenue D ",toName: " E 13 St & Avenue A ",coords:[[ -73.97668709 , 40.72228087 ], [ -73.98067966103554 , 40.72966729392978 ]]},
    {fromName: " S 5 Pl & S 5 St ",toName: " Old Slip & Front St ",coords:[[ -73.960876 , 40.710451 ], [ -74.00838676 , 40.7037992 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 39 St & 3 Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97604882 , 40.7489006 ]]},
    {fromName: " Crescent St & Ditmars Blvd ",toName: " 31 St & 23 Ave ",coords:[[ -73.9145645 , 40.7787185 ], [ -73.9125551 , 40.7747878 ]]},
    {fromName: " Broadway & Whipple St ",toName: " Carlton Ave & Flushing Ave ",coords:[[ -73.9437303 , 40.7016657 ], [ -73.973736 , 40.697787 ]]},
    {fromName: " Lexington Ave & E 26 St ",toName: " E 32 St & Park Ave ",coords:[[ -73.983293 , 40.741459 ], [ -73.98194829 , 40.7457121 ]]},
    {fromName: " E 74 St & 1 Ave ",toName: " E 59 St & Madison Ave ",coords:[[ -73.95482273 , 40.7689738 ], [ -73.97109243 , 40.76350532 ]]},
    {fromName: " W 35 St & Dyer Ave ",toName: " 8 Ave & W 33 St ",coords:[[ -73.99740189313889 , 40.754691750226016 ], [ -73.993934 , 40.751551 ]]},
    {fromName: " E 109 St & 3 Ave ",toName: " Lenox Ave & W 111 St ",coords:[[ -73.9432083 , 40.79329668 ], [ -73.9523 , 40.7987859 ]]},
    {fromName: " E 81 St & 3 Ave ",toName: " E 72 St & York Ave ",coords:[[ -73.9567526 , 40.77573034 ], [ -73.95348296 , 40.76663814 ]]},
    {fromName: " S Portland Ave & Hanson Pl ",toName: " 3 St & 7 Ave ",coords:[[ -73.97431458 , 40.68539567 ], [ -73.97839676 , 40.6703837 ]]},
    {fromName: " 2 Ave & E 104 St ",toName: " E 91 St & 2 Ave ",coords:[[ -73.94370784 , 40.7892105 ], [ -73.94965589046478 , 40.78112229934166 ]]},
    {fromName: " E 23 St & 1 Ave ",toName: " 1 Ave & E 30 St ",coords:[[ -73.97809472 , 40.736502 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " Pershing Square North ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.977706 , 40.751873 ]]},
    {fromName: " Mercer St & Bleecker St ",toName: " Mott St & Prince St ",coords:[[ -73.99662137031554 , 40.72706363348306 ], [ -73.99480012 , 40.72317958 ]]},
    {fromName: " Prospect Park West & 8 St ",toName: " Grand Army Plaza & Plaza St West ",coords:[[ -73.97637605667114 , 40.66514681533792 ], [ -73.97087984 , 40.6729679 ]]},
    {fromName: " Prospect Pl & Underhill Ave ",toName: " Park Pl & Vanderbilt Ave ",coords:[[ -73.96579 , 40.6769694 ], [ -73.969024 , 40.6767 ]]},
    {fromName: " Butler St & Court St ",toName: " 8 Ave & W 31 St ",coords:[[ -73.99440329 , 40.6849894 ], [ -73.9946848154068 , 40.7505853470215 ]]},
    {fromName: " W 42 St & 8 Ave ",toName: " Broadway & W 49 St ",coords:[[ -73.99098507 , 40.7575699 ], [ -73.9845272898674 , 40.76068327096592 ]]},
    {fromName: " 46 Ave & 5 St ",toName: " 44 Dr & 21 St ",coords:[[ -73.95451 , 40.74731 ], [ -73.9460927 , 40.748 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 53 St & Madison Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97402311 , 40.7597108 ]]},
    {fromName: " W 43 St & 10 Ave ",toName: " 11 Ave & W 59 St ",coords:[[ -73.99461843 , 40.76009437 ], [ -73.99046033620834 , 40.77149671054441 ]]},
    {fromName: " Market St & Cherry St ",toName: " Canal St & Rutgers St ",coords:[[ -73.99400398 , 40.71076228 ], [ -73.98990025 , 40.71427487 ]]},
    {fromName: " 6 Ave & 9 St ",toName: " Carroll St & 6 Ave ",coords:[[ -73.98377641 , 40.668127 ], [ -73.9787282 , 40.6740886 ]]},
    {fromName: " Pershing Square North ",toName: " W 33 St & 7 Ave ",coords:[[ -73.977706 , 40.751873 ], [ -73.99093085 , 40.75019995 ]]},
    {fromName: " 6 Ave & W 33 St ",toName: " 10 Hudson Yards ",coords:[[ -73.98848395 , 40.74901271 ], [ -74.00264 , 40.752957 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 30 St & Park Ave S ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.98303529 , 40.74444921 ]]},
    {fromName: " 1 Ave & E 16 St ",toName: " E 15 St & 3 Ave ",coords:[[ -73.98165557 , 40.73221853 ], [ -73.986923 , 40.734232 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 51 St & Lexington Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97207836 , 40.75714758 ]]},
    {fromName: " 6 Ave & 12 St ",toName: " Carroll St & 5 Ave ",coords:[[ -73.9854617 , 40.6663181 ], [ -73.9814832 , 40.6751622 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 43 St & 5 Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.98025184869766 , 40.754120810779256 ]]},
    {fromName: " Adelphi St & Myrtle Ave ",toName: " Fulton St & Adams St ",coords:[[ -73.97178913 , 40.69308257 ], [ -73.98949474096298 , 40.692418292578466 ]]},
    {fromName: " Bedford Ave & Bergen St ",toName: " Eastern Pkwy & Franklin Ave ",coords:[[ -73.952918 , 40.676368 ], [ -73.9576801 , 40.6707767 ]]},
    {fromName: " Norfolk St & Broome St ",toName: " Clinton St & Grand St ",coords:[[ -73.98802084 , 40.7172274 ], [ -73.9870295 , 40.71559509 ]]},
    {fromName: " E 11 St & Avenue B ",toName: " Grand St & Elizabeth St ",coords:[[ -73.97950418293476 , 40.72746420692392 ], [ -73.99596 , 40.718822 ]]},
    {fromName: " E 7 St & Avenue A ",toName: " Front St & Maiden Ln ",coords:[[ -73.98379855 , 40.72621788 ], [ -74.00612572 , 40.70530954 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " 11 Ave & W 27 St ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -74.005226 , 40.751396 ]]},
    {fromName: " W 35 St & Dyer Ave ",toName: " W 26 St & 8 Ave ",coords:[[ -73.99740189313889 , 40.754691750226016 ], [ -73.99723551 , 40.74734825 ]]},
    {fromName: " West End Ave & W 94 St ",toName: " W 89 St & Columbus Ave ",coords:[[ -73.974124 , 40.7941654 ], [ -73.97041561 , 40.7882213 ]]},
    {fromName: " DeKalb Ave & Vanderbilt Ave ",toName: " DeKalb Ave & Hudson Ave ",coords:[[ -73.96885458 , 40.68940747 ], [ -73.981013 , 40.689888 ]]},
    {fromName: " Vesey Pl & River Terrace ",toName: " North Moore St & Greenwich St ",coords:[[ -74.01658354 , 40.7153379 ], [ -74.0103006362915 , 40.72019521437465 ]]},{fromName: " Allen St & Hester St ",toName: " Pike St & Monroe St ",coords:[[ -73.99190759 , 40.71605866 ], [ -73.99193043 , 40.71173107 ]]},
    {fromName: " W 49 St & 8 Ave ",toName: " W 52 St & 11 Ave ",coords:[[ -73.98788205 , 40.76227205 ], [ -73.99392888 , 40.76727216 ]]},
    {fromName: " W 42 St & Dyer Ave ",toName: " W 26 St & 10 Ave ",coords:[[ -73.99379968643188 , 40.75898481399634 ], [ -74.002950346 , 40.749717753 ]]},
    {fromName: " Mt Morris Park W & W 120 St ",toName: " Park Ave & E 124 St ",coords:[[ -73.945925 , 40.804038 ], [ -73.9396861 , 40.8045555 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " 8 Ave & W 33 St ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.993934 , 40.751551 ]]},
    {fromName: " St Johns Pl & Washington Ave ",toName: " Carroll St & 5 Ave ",coords:[[ -73.9631611 , 40.6737236 ], [ -73.9814832 , 40.6751622 ]]},
    {fromName: " West Thames St ",toName: " Broadway & Battery Pl ",coords:[[ -74.01713445 , 40.70834698 ], [ -74.01361706 , 40.70463334 ]]},
    {fromName: " Court St & State St ",toName: " Kane St & Clinton St ",coords:[[ -73.99203074 , 40.6902375 ], [ -73.99645295 , 40.6861758 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " W 52 St & 5 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.97648516 , 40.75992262 ]]},
    {fromName: " William St & Pine St ",toName: " North Moore St & Greenwich St ",coords:[[ -74.00887308 , 40.70717936 ], [ -74.0103006362915 , 40.72019521437465 ]]},
    {fromName: " E 81 St & 3 Ave ",toName: " E 74 St & 1 Ave ",coords:[[ -73.9567526 , 40.77573034 ], [ -73.95482273 , 40.7689738 ]]},
    {fromName: " Park Ave & E 124 St ",toName: " 1 Ave & E 68 St ",coords:[[ -73.9396861 , 40.8045555 ], [ -73.95818491 , 40.76500525 ]]},
    {fromName: " 9 Ave & W 45 St ",toName: " E 43 St & 5 Ave ",coords:[[ -73.9912551 , 40.76019252 ], [ -73.98025184869766 , 40.754120810779256 ]]},
    {fromName: " 28 St & 41 Ave ",toName: " 28 St & 41 Ave ",coords:[[ -73.93797 , 40.751047 ], [ -73.93797 , 40.751047 ]]},
    {fromName: " E 2 St & 2 Ave ",toName: " W 34 St & 11 Ave ",coords:[[ -73.99069656 , 40.72502876 ], [ -74.0021163 , 40.75594159 ]]},
    {fromName: " Pershing Square North ",toName: " 11 Ave & W 27 St ",coords:[[ -73.977706 , 40.751873 ], [ -74.005226 , 40.751396 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " E 24 St & Park Ave S ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.98602213 , 40.74096374 ]]},
    {fromName: " Smith St & 3 St ",toName: " Carlton Ave & Flushing Ave ",coords:[[ -73.99599099 , 40.6787242 ], [ -73.973736 , 40.697787 ]]},
    {fromName: " Barclay St & Church St ",toName: " Pike St & Monroe St ",coords:[[ -74.01020234 , 40.71291224 ], [ -73.99193043 , 40.71173107 ]]},
    {fromName: " Pershing Square North ",toName: " 1 Ave & E 30 St ",coords:[[ -73.977706 , 40.751873 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " 1 Ave & E 30 St ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " Henry St & Atlantic Ave ",toName: " Douglass St & 3 Ave ",coords:[[ -73.99612349 , 40.69089272 ], [ -73.98432695 , 40.6802133 ]]},
    {fromName: " Maiden Ln & Pearl St ",toName: " Centre St & Chambers St ",coords:[[ -74.00731853 , 40.70706456 ], [ -74.0046073 , 40.71273266 ]]},
    {fromName: " Canal St & Rutgers St ",toName: " E 2 St & Avenue A ",coords:[[ -73.98990025 , 40.71427487 ], [ -73.98583620786667 , 40.72307749068673 ]]},
    {fromName: " Willoughby Ave & Hall St ",toName: " DeKalb Ave & Hudson Ave ",coords:[[ -73.96536851 , 40.69196035 ], [ -73.981013 , 40.689888 ]]},
    {fromName: " W 24 St & 7 Ave ",toName: " Allen St & Stanton St ",coords:[[ -73.99529885 , 40.74487634 ], [ -73.989111 , 40.722055 ]]},
    {fromName: " E 11 St & 1 Ave ",toName: " E 7 St & Avenue A ",coords:[[ -73.98426726 , 40.72953837 ], [ -73.98379855 , 40.72621788 ]]},
    {fromName: " W 4 St & 7 Ave S ",toName: " Pershing Square North ",coords:[[ -74.00293877 , 40.73401143 ], [ -73.977706 , 40.751873 ]]},
    {fromName: " Park Ave & E 124 St ",toName: " E 115 St & Madison Ave ",coords:[[ -73.9396861 , 40.8045555 ], [ -73.944846 , 40.7989445 ]]},
    {fromName: " 1 Ave & E 16 St ",toName: " Broadway & W 25 St ",coords:[[ -73.98165557 , 40.73221853 ], [ -73.98918628692627 , 40.74286877312112 ]]},
    {fromName: " Scholes St & Manhattan Ave ",toName: " S 4 St & Rodney St ",coords:[[ -73.9448625 , 40.70870368 ], [ -73.95608 , 40.70934 ]]},
    {fromName: " E 11 St & 2 Ave ",toName: " MacDougal St & Prince St ",coords:[[ -73.98672378 , 40.73047309 ], [ -74.00297088 , 40.72710258 ]]},
    {fromName: " Fulton St & William St ",toName: " Leonard St & Church St ",coords:[[ -74.00653609 , 40.70955958 ], [ -74.005549 , 40.717571 ]]},
    {fromName: " 1 Ave & E 44 St ",toName: " 1 Ave & E 68 St ",coords:[[ -73.96905301 , 40.75001986 ], [ -73.95818491 , 40.76500525 ]]},
    {fromName: " W 13 St & 5 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -73.99431 , 40.735445 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " Frederick Douglass Blvd & W 115 St ",toName: " Lenox Ave & W 117 St ",coords:[[ -73.9559308 , 40.8038654 ], [ -73.9490782 , 40.8025566 ]]},
    {fromName: " E 114 St & 1 Ave ",toName: " W 67 St & Broadway ",coords:[[ -73.9362541 , 40.7945663 ], [ -73.98266566 , 40.77492513 ]]},
    {fromName: " E 6 St & Avenue B ",toName: " Broadway & E 14 St ",coords:[[ -73.98185424 , 40.72453734 ], [ -73.99074142 , 40.73454567 ]]},
    {fromName: " W 74 St & Columbus Ave ",toName: " E 55 St & 3 Ave ",coords:[[ -73.97754961 , 40.7785669 ], [ -73.96865397691727 , 40.758996559605116 ]]},
    {fromName: " W 38 St & 8 Ave ",toName: " Broadway & W 29 St ",coords:[[ -73.99138152 , 40.75466591 ], [ -73.98855723 , 40.7462009 ]]},
    {fromName: " E 20 St & Park Ave ",toName: " Pershing Square South ",coords:[[ -73.98751968 , 40.73827428 ], [ -73.97791 , 40.751581 ]]},
    {fromName: " W 38 St & 8 Ave ",toName: " E 10 St & 5 Ave ",coords:[[ -73.99138152 , 40.75466591 ], [ -73.99510132 , 40.73331967 ]]},
    {fromName: " Riverside Dr & W 72 St ",toName: " Columbus Ave & W 72 St ",coords:[[ -73.98562431335449 , 40.78057799010334 ], [ -73.97898475 , 40.7770575 ]]},
    {fromName: " E 11 St & 1 Ave ",toName: " E 6 St & Avenue B ",coords:[[ -73.98426726 , 40.72953837 ], [ -73.98185424 , 40.72453734 ]]},
    {fromName: " W 47 St & 10 Ave ",toName: " E 24 St & Park Ave S ",coords:[[ -73.99301222 , 40.76269882 ], [ -73.98602213 , 40.74096374 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " Avenue C & E 18 St ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.973984 , 40.730563 ]]},
    {fromName: " Front St & Gold St ",toName: " Cadman Plaza West & Montague St ",coords:[[ -73.982578 , 40.70224 ], [ -73.990539 , 40.69383 ]]},
    {fromName: " E 24 St & Park Ave S ",toName: " W 15 St & 6 Ave ",coords:[[ -73.98602213 , 40.74096374 ], [ -73.99642959237099 , 40.738046142482766 ]]},
    {fromName: " E 20 St & FDR Drive ",toName: " Lexington Ave & E 29 St ",coords:[[ -73.97573881 , 40.73314259 ], [ -73.98215353488922 , 40.74311555376486 ]]},
    {fromName: " Richardson St & N Henry St ",toName: " Broadway & Whipple St ",coords:[[ -73.94223690032959 , 40.71907891179564 ], [ -73.9437303 , 40.7016657 ]]},
    {fromName: " E 43 St & 5 Ave ",toName: " 11 Ave & W 27 St ",coords:[[ -73.98025184869766 , 40.754120810779256 ], [ -74.005226 , 40.751396 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " 31 St & Thomson Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.93540375 , 40.74469738 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " Pershing Square North ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.977706 , 40.751873 ]]},
    {fromName: " E 55 St & 2 Ave ",toName: " E 55 St & Lexington Ave ",coords:[[ -73.96603308 , 40.75797322 ], [ -73.97031366 , 40.75968085 ]]},
    {fromName: " Mt Morris Park W & W 120 St ",toName: " Park Ave & E 124 St ",coords:[[ -73.945925 , 40.804038 ], [ -73.9396861 , 40.8045555 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " Avenue C & E 18 St ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -73.973984 , 40.730563 ]]},
    {fromName: " E 91 St & Park Ave ",toName: " 1 Ave & E 78 St ",coords:[[ -73.955327 , 40.7835016 ], [ -73.9535166 , 40.77140426 ]]},
    {fromName: " 1 Ave & E 68 St ",toName: " 1 Ave & E 62 St ",coords:[[ -73.95818491 , 40.76500525 ], [ -73.96094022 , 40.7612274 ]]},
    {fromName: " E 48 St & 3 Ave ",toName: " 1 Ave & E 68 St ",coords:[[ -73.971878855 , 40.7546011026 ], [ -73.95818491 , 40.76500525 ]]},
    {fromName: " 23 Ave & 27 St ",toName: " 31 St & 23 Ave ",coords:[[ -73.9153175 , 40.776165 ], [ -73.9125551 , 40.7747878 ]]},
    {fromName: " Pearl St & Hanover Square ",toName: " 6 Ave & Canal St ",coords:[[ -74.00926027 , 40.7047177 ], [ -74.00566443 , 40.72243797 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " W 52 St & 6 Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97982001304626 , 40.76132983124814 ]]},
    {fromName: " Union St & 4 Ave ",toName: " Grand Army Plaza & Plaza St West ",coords:[[ -73.98282002 , 40.6772744 ], [ -73.97087984 , 40.6729679 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " W 42 St & 8 Ave ",coords:[[ -73.993934 , 40.751551 ], [ -73.99098507 , 40.7575699 ]]},
    {fromName: " E 15 St & 3 Ave ",toName: " Broadway & W 25 St ",coords:[[ -73.986923 , 40.734232 ], [ -73.98918628692627 , 40.74286877312112 ]]},
    {fromName: " St Marks Pl & 1 Ave ",toName: " Great Jones St ",coords:[[ -73.98564945 , 40.72779126 ], [ -73.99379025 , 40.72743423 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " E 27 St & 1 Ave ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -73.976806 , 40.739445 ]]},
    {fromName: " Central Park West & W 68 St ",toName: " W 31 St & 7 Ave ",coords:[[ -73.97782542 , 40.7734066 ], [ -73.9916 , 40.749156 ]]},
    {fromName: " Clark St & Henry St ",toName: " Henry St & Atlantic Ave ",coords:[[ -73.99344559 , 40.69760127 ], [ -73.99612349 , 40.69089272 ]]},
    {fromName: " Carmine St & 6 Ave ",toName: " Mercer St & Bleecker St ",coords:[[ -74.00214988 , 40.73038599 ], [ -73.99662137031554 , 40.72706363348306 ]]},
    {fromName: " E 24 St & Park Ave S ",toName: " Pershing Square South ",coords:[[ -73.98602213 , 40.74096374 ], [ -73.97791 , 40.751581 ]]},
    {fromName: " 11 Ave & W 27 St ",toName: " 9 Ave & W 22 St ",coords:[[ -74.005226 , 40.751396 ], [ -74.00197139 , 40.7454973 ]]},
    {fromName: " W 56 St & 10 Ave ",toName: " W 56 St & 10 Ave ",coords:[[ -73.988639 , 40.768254 ], [ -73.988639 , 40.768254 ]]},
    {fromName: " Broadway & W 41 St ",toName: " 11 Ave & W 41 St ",coords:[[ -73.98658032 , 40.75513557 ], [ -73.99884222 , 40.76030096 ]]},
    {fromName: " Pershing Square North ",toName: " E 39 St & 3 Ave ",coords:[[ -73.977706 , 40.751873 ], [ -73.97604882 , 40.7489006 ]]},
    {fromName: " 1 Pl & Clinton St ",toName: " Park Ave & St Edwards St ",coords:[[ -73.99905709 , 40.6809591 ], [ -73.97803415 , 40.69608941 ]]},
    {fromName: " Carlton Ave & Flushing Ave ",toName: " Front St & Gold St ",coords:[[ -73.973736 , 40.697787 ], [ -73.982578 , 40.70224 ]]},
    {fromName: " W 37 St & 10 Ave ",toName: " W 16 St & 8 Ave ",coords:[[ -73.9979009 , 40.75660359 ], [ -74.001384973526 , 40.741021509002664 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " W 52 St & 6 Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97982001304626 , 40.76132983124814 ]]},
    {fromName: " E 11 St & 2 Ave ",toName: " Barrow St & Hudson St ",coords:[[ -73.98672378 , 40.73047309 ], [ -74.00674436 , 40.73172428 ]]},
    {fromName: " Allen St & Rivington St ",toName: " 1 Ave & E 30 St ",coords:[[ -73.98997825 , 40.72019576 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " 9 Ave & W 45 St ",toName: " Broadway & W 36 St ",coords:[[ -73.9912551 , 40.76019252 ], [ -73.98765428 , 40.75097711 ]]},
    {fromName: " 3 Ave & E 72 St ",toName: " W 84 St & Columbus Ave ",coords:[[ -73.96060712 , 40.7699426 ], [ -73.97283406 , 40.78499979 ]]},
    {fromName: " Carroll St & 6 Ave ",toName: " 6 Ave & 12 St ",coords:[[ -73.9787282 , 40.6740886 ], [ -73.9854617 , 40.6663181 ]]},
    {fromName: " W 42 St & Dyer Ave ",toName: " 8 Ave & W 52 St ",coords:[[ -73.99379968643188 , 40.75898481399634 ], [ -73.9851615 , 40.76370739 ]]},
    {fromName: " 6 Ave & W 33 St ",toName: " E 33 St & 1 Ave ",coords:[[ -73.98848395 , 40.74901271 ], [ -73.97449783980846 , 40.74322681432173 ]]},
    {fromName: " Little West St & 1 Pl ",toName: " Vesey Pl & River Terrace ",coords:[[ -74.01677685 , 40.70569254 ], [ -74.01658354 , 40.7153379 ]]},
    {fromName: " Douglass St & 4 Ave ",toName: " Dean St & 4 Ave ",coords:[[ -73.98154004 , 40.6792788 ], [ -73.97895137 , 40.68312489 ]]},
    {fromName: " Central Park West & W 85 St ",toName: " E 47 St & 2 Ave ",coords:[[ -73.96961715 , 40.78472675 ], [ -73.97032517 , 40.75323098 ]]},
    {fromName: " 1 Ave & E 16 St ",toName: " E 20 St & FDR Drive ",coords:[[ -73.98165557 , 40.73221853 ], [ -73.97573881 , 40.73314259 ]]},
    {fromName: " N 6 St & Bedford Ave ",toName: " Wythe Ave & Metropolitan Ave ",coords:[[ -73.95850939 , 40.71745169 ], [ -73.963198 , 40.716887 ]]},
    {fromName: " W 106 St & Amsterdam Ave ",toName: " W 95 St & Broadway ",coords:[[ -73.9664492472 , 40.8008363 ], [ -73.971888 , 40.7937704 ]]},
    {fromName: " DeKalb Ave & Vanderbilt Ave ",toName: " DeKalb Ave & Hudson Ave ",coords:[[ -73.96885458 , 40.68940747 ], [ -73.981013 , 40.689888 ]]},
    {fromName: " E 15 St & 3 Ave ",toName: " W 52 St & 6 Ave ",coords:[[ -73.986923 , 40.734232 ], [ -73.97982001304626 , 40.76132983124814 ]]},
    {fromName: " E 17 St & Broadway ",toName: " Lafayette St & Jersey St ",coords:[[ -73.99009296 , 40.73704984 ], [ -73.99600982666016 , 40.72430527250332 ]]},
    {fromName: " 49 Ave & 21 St ",toName: " 27 St & Hunter St ",coords:[[ -73.948852 , 40.74252 ], [ -73.941275 , 40.7485 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 47 St & 2 Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97032517 , 40.75323098 ]]},
    {fromName: " W 67 St & Broadway ",toName: " E 91 St & 2 Ave ",coords:[[ -73.98266566 , 40.77492513 ], [ -73.94965589046478 , 40.78112229934166 ]]},
    {fromName: " Broadway & W 41 St ",toName: " E 47 St & Park Ave ",coords:[[ -73.98658032 , 40.75513557 ], [ -73.97498696 , 40.75510267 ]]},
    {fromName: " Columbus Ave & W 95 St ",toName: " W 92 St & Broadway ",coords:[[ -73.968087 , 40.7919557 ], [ -73.9739 , 40.7921 ]]},
    {fromName: " W 42 St & 8 Ave ",toName: " E 47 St & Park Ave ",coords:[[ -73.99098507 , 40.7575699 ], [ -73.97498696 , 40.75510267 ]]},
    {fromName: " Hope St & Union Ave ",toName: " Broadway & W 38 St ",coords:[[ -73.95141312 , 40.71167351 ], [ -73.98721619 , 40.75299641 ]]},
    {fromName: " 1 Ave & E 18 St ",toName: " E 17 St & Broadway ",coords:[[ -73.98054420948029 , 40.733812191966315 ], [ -73.99009296 , 40.73704984 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " E 60 St & York Ave ",coords:[[ -73.993934 , 40.751551 ], [ -73.959223 , 40.759107 ]]},
    {fromName: " Grand Army Plaza & Central Park S ",toName: " E 53 St & Madison Ave ",coords:[[ -73.97371465 , 40.7643971 ], [ -73.97402311 , 40.7597108 ]]},
    {fromName: " W 20 St & 11 Ave ",toName: " Front St & Maiden Ln ",coords:[[ -74.007756 , 40.746745 ], [ -74.00612572 , 40.70530954 ]]},
    {fromName: " South St & Gouverneur Ln ",toName: " Concord St & Bridge St ",coords:[[ -74.00670227 , 40.70355377 ], [ -73.98476437 , 40.69766564 ]]},
    {fromName: " Baltic St & 5 Ave ",toName: " Duffield St & Willoughby St ",coords:[[ -73.97854971 , 40.6795766 ], [ -73.9842844 , 40.69221589 ]]},
    {fromName: " Hanson Pl & Ashland Pl ",toName: " Willoughby St & Fleet St ",coords:[[ -73.97790759801863 , 40.68506807308177 ], [ -73.9813018 , 40.69196566 ]]},
    {fromName: " Watts St & Greenwich St ",toName: " Greenwich St & W Houston St ",coords:[[ -74.00965965 , 40.72405549 ], [ -74.008591 , 40.728846 ]]},
    {fromName: " W 42 St & 8 Ave ",toName: " Pershing Square North ",coords:[[ -73.99098507 , 40.7575699 ], [ -73.977706 , 40.751873 ]]},
    {fromName: " W 20 St & 8 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -74.00004031 , 40.74345335 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " 3 Ave & E 72 St ",toName: " E 55 St & Lexington Ave ",coords:[[ -73.96060712 , 40.7699426 ], [ -73.97031366 , 40.75968085 ]]},
    {fromName: " Harrison St & Hudson St ",toName: " Howard St & Centre St ",coords:[[ -74.0090009 , 40.71870987 ], [ -73.99973337 , 40.71910537 ]]},
    {fromName: " Columbia St & Kane St ",toName: " Bergen St & Smith St ",coords:[[ -74.0016256 , 40.68763155 ], [ -73.99063168 , 40.6867443 ]]},
    {fromName: " E 6 St & Avenue D ",toName: " E 2 St & Avenue C ",coords:[[ -73.97668709 , 40.72228087 ], [ -73.98085795 , 40.7208736 ]]},
    {fromName: " Christopher St & Greenwich St ",toName: " Leonard St & Church St ",coords:[[ -74.00711384 , 40.73291553 ], [ -74.005549 , 40.717571 ]]},
    {fromName: " E 31 St & 3 Ave ",toName: " Pershing Square North ",coords:[[ -73.97966069 , 40.74394314 ], [ -73.977706 , 40.751873 ]]},
    {fromName: " E 39 St & 3 Ave ",toName: " W 53 St & 10 Ave ",coords:[[ -73.97604882 , 40.7489006 ], [ -73.99061728 , 40.76669671 ]]},
    {fromName: " W 38 St & 8 Ave ",toName: " 5 Ave & E 29 St ",coords:[[ -73.99138152 , 40.75466591 ], [ -73.98683077 , 40.7451677 ]]},
    {fromName: " 9 Ave & W 28 St ",toName: " W 15 St & 10 Ave ",coords:[[ -73.99923384189606 , 40.74937024193277 ], [ -74.00747358798981 , 40.742753828659026 ]]},
    {fromName: " W 76 St & Columbus Ave ",toName: " Grand Army Plaza & Central Park S ",coords:[[ -73.97728532552719 , 40.7801839724239 ], [ -73.97371465 , 40.7643971 ]]},
    {fromName: " E 24 St & Park Ave S ",toName: " E 23 St & 1 Ave ",coords:[[ -73.98602213 , 40.74096374 ], [ -73.97809472 , 40.736502 ]]},
    {fromName: " Greenwich St & W Houston St ",toName: " W 52 St & 5 Ave ",coords:[[ -74.008591 , 40.728846 ], [ -73.97648516 , 40.75992262 ]]},
    {fromName: " Washington Pl & 6 Ave ",toName: " W 26 St & 8 Ave ",coords:[[ -74.00026394 , 40.73224119 ], [ -73.99723551 , 40.74734825 ]]},
    {fromName: " Macon St & Nostrand Ave ",toName: " Flushing Ave & Vanderbilt Ave ",coords:[[ -73.9500479759 , 40.6809833854 ], [ -73.97077560424805 , 40.697950315695444 ]]},
    {fromName: " Nassau Ave & Newell St ",toName: " Greenpoint Ave & Manhattan Ave ",coords:[[ -73.94752621650696 , 40.724812564400175 ], [ -73.95394 , 40.73026 ]]},
    {fromName: " Broadway & W 32 St ",toName: " 8 Ave & W 33 St ",coords:[[ -73.98808416 , 40.74854862 ], [ -73.993934 , 40.751551 ]]},
    {fromName: " E 82 St & East End Ave ",toName: " E 55 St & 2 Ave ",coords:[[ -73.9468208 , 40.7724607 ], [ -73.96603308 , 40.75797322 ]]},
    {fromName: " Sterling Pl & Bedford Ave ",toName: " Eastern Pkwy & Franklin Ave ",coords:[[ -73.954131 , 40.672695 ], [ -73.9576801 , 40.6707767 ]]},
    {fromName: " Bedford Ave & Nassau Ave ",toName: " Driggs Ave & N 9 St ",coords:[[ -73.95212324 , 40.72311651 ], [ -73.95520135760307 , 40.71816969454208 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " 1 Ave & E 30 St ",coords:[[ -73.9916 , 40.749156 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " Madison St & Montgomery St ",toName: " Canal St & Rutgers St ",coords:[[ -73.984844 , 40.713126 ], [ -73.98990025 , 40.71427487 ]]},
    {fromName: " Broadway & W 49 St ",toName: " Broadway & W 49 St ",coords:[[ -73.9845272898674 , 40.76068327096592 ], [ -73.9845272898674 , 40.76068327096592 ]]},
    {fromName: " Liberty St & Broadway ",toName: " Barclay St & Church St ",coords:[[ -74.01043382 , 40.70905623 ], [ -74.01020234 , 40.71291224 ]]},
    {fromName: " W 49 St & 8 Ave ",toName: " Central Park S & 6 Ave ",coords:[[ -73.98788205 , 40.76227205 ], [ -73.97634151 , 40.76590936 ]]},
    {fromName: " Clinton St & Grand St ",toName: " 1 Ave & E 16 St ",coords:[[ -73.9870295 , 40.71559509 ], [ -73.98165557 , 40.73221853 ]]},
    {fromName: " E 5 St & Avenue C ",toName: " Cooper Square & Astor Pl ",coords:[[ -73.97995466 , 40.72299208 ], [ -73.99075269699097 , 40.72951496224949 ]]},
    {fromName: " Columbus Ave & W 103 St ",toName: " Columbus Ave & W 72 St ",coords:[[ -73.9643412291 , 40.7969347 ], [ -73.97898475 , 40.7770575 ]]},
    {fromName: " Greene Ave & Throop Ave ",toName: " S 4 St & Rodney St ",coords:[[ -73.942061 , 40.6894932 ], [ -73.95608 , 40.70934 ]]},
    {fromName: " Broadway & W 25 St ",toName: " LaGuardia Pl & W 3 St ",coords:[[ -73.98918628692627 , 40.74286877312112 ], [ -73.99810231 , 40.72917025 ]]},
    {fromName: " Bergen St & Vanderbilt Ave ",toName: " Atlantic Ave & Fort Greene Pl ",coords:[[ -73.9680438 , 40.6794388 ], [ -73.97632328 , 40.68382604 ]]},
    {fromName: " W 49 St & 8 Ave ",toName: " E 47 St & Park Ave ",coords:[[ -73.98788205 , 40.76227205 ], [ -73.97498696 , 40.75510267 ]]},
    {fromName: " Park Pl & Vanderbilt Ave ",toName: " Banker St & Meserole Ave ",coords:[[ -73.969024 , 40.6767 ], [ -73.95621 , 40.72606 ]]},
    {fromName: " E 118 St & Madison Ave ",toName: " St Nicholas Ave & Manhattan Ave ",coords:[[ -73.9442507 , 40.8014866 ], [ -73.953149 , 40.809725 ]]},
    {fromName: " 3 Ave & E 95 St ",toName: " 5 Ave & E 78 St ",coords:[[ -73.94968539476395 , 40.784596798848916 ], [ -73.96427392959595 , 40.77632142182271 ]]},
    {fromName: " Broadway & W 60 St ",toName: " W 59 St & 10 Ave ",coords:[[ -73.98191841 , 40.76915505 ], [ -73.988038 , 40.770513 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " W 34 St & 11 Ave ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -74.0021163 , 40.75594159 ]]},
    {fromName: " Leonard St & Nassau Ave ",toName: " Driggs Ave & N 9 St ",coords:[[ -73.94984364509583 , 40.7239567849954 ], [ -73.95520135760307 , 40.71816969454208 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " E 39 St & 3 Ave ",coords:[[ -73.993934 , 40.751551 ], [ -73.97604882 , 40.7489006 ]]},
    {fromName: " W 38 St & 8 Ave ",toName: " E 24 St & Park Ave S ",coords:[[ -73.99138152 , 40.75466591 ], [ -73.98602213 , 40.74096374 ]]},
    {fromName: " Park Ave & Marcus Garvey Blvd ",toName: " Clinton Ave & Myrtle Ave ",coords:[[ -73.941342 , 40.698617 ], [ -73.968896 , 40.693261 ]]},
    {fromName: " Barrow St & Hudson St ",toName: " Lafayette St & Jersey St ",coords:[[ -74.00674436 , 40.73172428 ], [ -73.99600982666016 , 40.72430527250332 ]]},
    {fromName: " Broadway & W 32 St ",toName: " E 33 St & 1 Ave ",coords:[[ -73.98808416 , 40.74854862 ], [ -73.97449783980846 , 40.74322681432173 ]]},
    {fromName: " Greenwich Ave & Charles St ",toName: " University Pl & E 14 St ",coords:[[ -74.000271 , 40.735238 ], [ -73.99200509 , 40.73492695 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " E 48 St & 5 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.97805914282799 , 40.75724567911726 ]]},
    {fromName: " Carlton Ave & Park Ave ",toName: " Willoughby St & Fleet St ",coords:[[ -73.97355569 , 40.69580705 ], [ -73.9813018 , 40.69196566 ]]},
    {fromName: " E 10 St & Avenue A ",toName: " Allen St & Stanton St ",coords:[[ -73.98142006 , 40.72740794 ], [ -73.989111 , 40.722055 ]]},
    {fromName: " Broadway & W 53 St ",toName: " W 52 St & 5 Ave ",coords:[[ -73.98268129 , 40.76344058 ], [ -73.97648516 , 40.75992262 ]]},
    {fromName: " E 2 St & Avenue C ",toName: " Broadway & W 49 St ",coords:[[ -73.98085795 , 40.7208736 ], [ -73.9845272898674 , 40.76068327096592 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " 10 Hudson Yards ",coords:[[ -73.99093085 , 40.75019995 ], [ -74.00264 , 40.752957 ]]},
    {fromName: " E 32 St & Park Ave ",toName: " E 33 St & 5 Ave ",coords:[[ -73.98194829 , 40.7457121 ], [ -73.98490707 , 40.74765947 ]]},
    {fromName: " E 77 St & 3 Ave ",toName: " 1 Ave & E 78 St ",coords:[[ -73.95856158 , 40.77314236 ], [ -73.9535166 , 40.77140426 ]]},
    {fromName: " West Thames St ",toName: " Water - Whitehall Plaza ",coords:[[ -74.01713445 , 40.70834698 ], [ -74.0127234 , 40.70255065 ]]},
    {fromName: " Grand St & Elizabeth St ",toName: " W 26 St & 8 Ave ",coords:[[ -73.99596 , 40.718822 ], [ -73.99723551 , 40.74734825 ]]},
    {fromName: " E 2 St & Avenue C ",toName: " W 25 St & 6 Ave ",coords:[[ -73.98085795 , 40.7208736 ], [ -73.99144871 , 40.74395411 ]]},
    {fromName: " E 16 St & Irving Pl ",toName: " E 17 St & Broadway ",coords:[[ -73.98797392845154 , 40.735367055605394 ], [ -73.99009296 , 40.73704984 ]]},
    {fromName: " Pike St & E Broadway ",toName: " W Broadway & Spring Street ",coords:[[ -73.99293911 , 40.71406667 ], [ -74.00165855884552 , 40.72494672359416 ]]},
    {fromName: " E 68 St & 3 Ave ",toName: " E 72 St & York Ave ",coords:[[ -73.96224617958069 , 40.76712840349542 ], [ -73.95348296 , 40.76663814 ]]},
    {fromName: " Clark St & Henry St ",toName: " Front St & Washington St ",coords:[[ -73.99344559 , 40.69760127 ], [ -73.98940236 , 40.70255088 ]]},
    {fromName: " Broadway & Battery Pl ",toName: " South End Ave & Liberty St ",coords:[[ -74.01361706 , 40.70463334 ], [ -74.015756 , 40.711512 ]]},
    {fromName: " Wythe Ave & Metropolitan Ave ",toName: " E 47 St & 2 Ave ",coords:[[ -73.963198 , 40.716887 ], [ -73.97032517 , 40.75323098 ]]},
    {fromName: " St Marks Pl & 2 Ave ",toName: " E 10 St & 5 Ave ",coords:[[ -73.98713956 , 40.7284186 ], [ -73.99510132 , 40.73331967 ]]},
    {fromName: " W 24 St & 7 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -73.99529885 , 40.74487634 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " E 23 St & 1 Ave ",toName: " E 24 St & Park Ave S ",coords:[[ -73.97809472 , 40.736502 ], [ -73.98602213 , 40.74096374 ]]},
    {fromName: " Liberty St & Broadway ",toName: " W 15 St & 6 Ave ",coords:[[ -74.01043382 , 40.70905623 ], [ -73.99642959237099 , 40.738046142482766 ]]},
    {fromName: " W 47 St & 10 Ave ",toName: " W 45 St & 8 Ave ",coords:[[ -73.99301222 , 40.76269882 ], [ -73.98859651 , 40.75929124 ]]},
    {fromName: " 4 Ave & 2 St ",toName: " E 16 St & Irving Pl ",coords:[[ -73.98501142859459 , 40.674613422475815 ], [ -73.98797392845154 , 40.735367055605394 ]]},
    {fromName: " Canal St & Rutgers St ",toName: " Water - Whitehall Plaza ",coords:[[ -73.98990025 , 40.71427487 ], [ -74.0127234 , 40.70255065 ]]},
    {fromName: " E 30 St & Park Ave S ",toName: " 1 Ave & E 30 St ",coords:[[ -73.98303529 , 40.74444921 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " Washington St & Gansevoort St ",toName: " Hudson St & Reade St ",coords:[[ -74.008119 , 40.739323 ], [ -74.0091059 , 40.71625008 ]]},
    {fromName: " West Thames St ",toName: " Barclay St & Church St ",coords:[[ -74.01713445 , 40.70834698 ], [ -74.01020234 , 40.71291224 ]]},
    {fromName: " Bialystoker Pl & Delancey St ",toName: " Pearl St & Hanover Square ",coords:[[ -73.98261206 , 40.71622644 ], [ -74.00926027 , 40.7047177 ]]},
    {fromName: " South End Ave & Liberty St ",toName: " Water - Whitehall Plaza ",coords:[[ -74.015756 , 40.711512 ], [ -74.0127234 , 40.70255065 ]]},
    {fromName: " E 11 St & 1 Ave ",toName: " E 7 St & Avenue A ",coords:[[ -73.98426726 , 40.72953837 ], [ -73.98379855 , 40.72621788 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " E 33 St & 1 Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.97449783980846 , 40.74322681432173 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " E 27 St & 1 Ave ",coords:[[ -73.9916 , 40.749156 ], [ -73.976806 , 40.739445 ]]},
    {fromName: " W 42 St & Dyer Ave ",toName: " E 47 St & Park Ave ",coords:[[ -73.99379968643188 , 40.75898481399634 ], [ -73.97498696 , 40.75510267 ]]},
    {fromName: " W 42 St & Dyer Ave ",toName: " 10 Hudson Yards ",coords:[[ -73.99379968643188 , 40.75898481399634 ], [ -74.00264 , 40.752957 ]]},
    {fromName: " 1 Ave & E 16 St ",toName: " 1 Ave & E 30 St ",coords:[[ -73.98165557 , 40.73221853 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " E 10 St & Avenue A ",toName: " E 10 St & Avenue A ",coords:[[ -73.98142006 , 40.72740794 ], [ -73.98142006 , 40.72740794 ]]},
    {fromName: " Kent Ave & S 11 St ",toName: " Broadway & Roebling St ",coords:[[ -73.96841526031494 , 40.707644944175705 ], [ -73.96063148975372 , 40.70924826276157 ]]},
    {fromName: " E 17 St & Broadway ",toName: " 1 Ave & E 30 St ",coords:[[ -73.99009296 , 40.73704984 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " Watts St & Greenwich St ",toName: " Cliff St & Fulton St ",coords:[[ -74.00965965 , 40.72405549 ], [ -74.00504082441329 , 40.70831794366396 ]]},
    {fromName: " Avenue D & E 8 St ",toName: " E 13 St & Avenue A ",coords:[[ -73.97574813 , 40.72368361 ], [ -73.98067966103554 , 40.72966729392978 ]]},
    {fromName: " S 4 St & Wythe Ave ",toName: " Broadway & Roebling St ",coords:[[ -73.96590294 , 40.71285887 ], [ -73.96063148975372 , 40.70924826276157 ]]},
    {fromName: " W 4 St & 7 Ave S ",toName: " Washington Pl & Broadway ",coords:[[ -74.00293877 , 40.73401143 ], [ -73.99404649 , 40.72903917 ]]},
    {fromName: " Carmine St & 6 Ave ",toName: " Greenwich St & W Houston St ",coords:[[ -74.00214988 , 40.73038599 ], [ -74.008591 , 40.728846 ]]},
    {fromName: " Water - Whitehall Plaza ",toName: " South End Ave & Liberty St ",coords:[[ -74.0127234 , 40.70255065 ], [ -74.015756 , 40.711512 ]]},
    {fromName: " Suffolk St & Stanton St ",toName: " W 16 St & The High Line ",coords:[[ -73.98517977 , 40.72066442 ], [ -74.00681753 , 40.74334935 ]]},
    {fromName: " E 102 St & 1 Ave ",toName: " E 89 St & 3 Ave ",coords:[[ -73.94164802 , 40.7869946 ], [ -73.9521667 , 40.7806284 ]]},
    {fromName: " E 102 St & 1 Ave ",toName: " E 106 St & Madison Ave ",coords:[[ -73.94164802 , 40.7869946 ], [ -73.94945003 , 40.7934337 ]]},
    {fromName: " Columbus Ave & W 72 St ",toName: " E 59 St & Madison Ave ",coords:[[ -73.97898475 , 40.7770575 ], [ -73.97109243 , 40.76350532 ]]},
    {fromName: " DeKalb Ave & Vanderbilt Ave ",toName: " Washington Ave & Park Ave ",coords:[[ -73.96885458 , 40.68940747 ], [ -73.96751037 , 40.69610226 ]]},
    {fromName: " Washington Park ",toName: " Cumberland St & Lafayette Ave ",coords:[[ -73.9737299 , 40.6917823 ], [ -73.97265183 , 40.68753406 ]]},
    {fromName: " E 55 St & 3 Ave ",toName: " E 48 St & 5 Ave ",coords:[[ -73.96865397691727 , 40.758996559605116 ], [ -73.97805914282799 , 40.75724567911726 ]]},
    {fromName: " Park Ave & St Edwards St ",toName: " Fulton St & Rockwell Pl ",coords:[[ -73.97803415 , 40.69608941 ], [ -73.979382 , 40.688226 ]]},
    {fromName: " MacDougal St & Prince St ",toName: " E 48 St & 5 Ave ",coords:[[ -74.00297088 , 40.72710258 ], [ -73.97805914282799 , 40.75724567911726 ]]},
    {fromName: " E 25 St & 2 Ave ",toName: " E 15 St & 3 Ave ",coords:[[ -73.97973776 , 40.73912601 ], [ -73.986923 , 40.734232 ]]},
    {fromName: " E 25 St & 2 Ave ",toName: " Broadway & W 41 St ",coords:[[ -73.97973776 , 40.73912601 ], [ -73.98658032 , 40.75513557 ]]},
    {fromName: " W 31 St & 7 Ave ",toName: " Lafayette St & E 8 St ",coords:[[ -73.9916 , 40.749156 ], [ -73.99102628231049 , 40.73020660529954 ]]},
    {fromName: " 8 Ave & W 33 St ",toName: " W 70 St & Amsterdam Ave ",coords:[[ -73.993934 , 40.751551 ], [ -73.98288594 , 40.77748046 ]]},
    {fromName: " Degraw St & Hoyt St ",toName: " Jay St & Tech Pl ",coords:[[ -73.99079024791718 , 40.681990442707026 ], [ -73.987167 , 40.695065 ]]},
    {fromName: " St James Pl & Oliver St ",toName: " Fulton St & William St ",coords:[[ -73.99851193 , 40.71307916 ], [ -74.00653609 , 40.70955958 ]]},
    {fromName: " St Marks Pl & 2 Ave ",toName: " Great Jones St ",coords:[[ -73.98713956 , 40.7284186 ], [ -73.99379025 , 40.72743423 ]]},
    {fromName: " St Johns Pl & Washington Ave ",toName: " Bergen St & Vanderbilt Ave ",coords:[[ -73.9631611 , 40.6737236 ], [ -73.9680438 , 40.6794388 ]]},
    {fromName: " 1 Ave & E 18 St ",toName: " Broadway & W 49 St ",coords:[[ -73.98054420948029 , 40.733812191966315 ], [ -73.9845272898674 , 40.76068327096592 ]]},
    {fromName: " Christopher St & Greenwich St ",toName: " E 43 St & 5 Ave ",coords:[[ -74.00711384 , 40.73291553 ], [ -73.98025184869766 , 40.754120810779256 ]]},
    {fromName: " Cooper Square & Astor Pl ",toName: " Great Jones St ",coords:[[ -73.99075269699097 , 40.72951496224949 ], [ -73.99379025 , 40.72743423 ]]},
    {fromName: " E 10 St & 5 Ave ",toName: " Lafayette St & E 8 St ",coords:[[ -73.99510132 , 40.73331967 ], [ -73.99102628231049 , 40.73020660529954 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " Pershing Square North ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.977706 , 40.751873 ]]},
    {fromName: " E 20 St & FDR Drive ",toName: " E 33 St & 1 Ave ",coords:[[ -73.97573881 , 40.73314259 ], [ -73.97449783980846 , 40.74322681432173 ]]},
    {fromName: " 6 Ave & W 33 St ",toName: " Broadway & W 36 St ",coords:[[ -73.98848395 , 40.74901271 ], [ -73.98765428 , 40.75097711 ]]},
    {fromName: " W 33 St & 7 Ave ",toName: " E 84 St & Park Ave ",coords:[[ -73.99093085 , 40.75019995 ], [ -73.95772073 , 40.77862688 ]]},
    {fromName: " Allen St & Hester St ",toName: " 1 Ave & E 18 St ",coords:[[ -73.99190759 , 40.71605866 ], [ -73.98054420948029 , 40.733812191966315 ]]},
    {fromName: " W 26 St & 8 Ave ",toName: " 11 Ave & W 59 St ",coords:[[ -73.99723551 , 40.74734825 ], [ -73.99046033620834 , 40.77149671054441 ]]},
    {fromName: " E 7 St & Avenue A ",toName: " Broadway & E 14 St ",coords:[[ -73.98379855 , 40.72621788 ], [ -73.99074142 , 40.73454567 ]]},
    {fromName: " Broadway & W 25 St ",toName: " 1 Ave & E 18 St ",coords:[[ -73.98918628692627 , 40.74286877312112 ], [ -73.98054420948029 , 40.733812191966315 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 47 St & Park Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97498696 , 40.75510267 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " E 72 St & York Ave ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -73.95348296 , 40.76663814 ]]},
    {fromName: " Lexington Ave & E 29 St ",toName: " Broadway & W 29 St ",coords:[[ -73.98215353488922 , 40.74311555376486 ], [ -73.98855723 , 40.7462009 ]]},
    {fromName: " Garfield Pl & 8 Ave ",toName: " Willoughby Ave & Hall St ",coords:[[ -73.97484126 , 40.6711978 ], [ -73.96536851 , 40.69196035 ]]},
    {fromName: " Lispenard St & Broadway ",toName: " 6 Ave & Spring St ",coords:[[ -74.00247214 , 40.71939226 ], [ -74.00412082672119 , 40.7252556952547 ]]},
    {fromName: " 1 Ave & E 78 St ",toName: " E 77 St & 3 Ave ",coords:[[ -73.9535166 , 40.77140426 ], [ -73.95856158 , 40.77314236 ]]},
    {fromName: " MacDougal St & Prince St ",toName: " E 11 St & 2 Ave ",coords:[[ -74.00297088 , 40.72710258 ], [ -73.98672378 , 40.73047309 ]]},
    {fromName: " E 19 St & 3 Ave ",toName: " W 16 St & 8 Ave ",coords:[[ -73.98473765 , 40.73624527 ], [ -74.001384973526 , 40.741021509002664 ]]},
    {fromName: " Spruce St & Nassau St ",toName: " Lispenard St & Broadway ",coords:[[ -74.00552427 , 40.71146364 ], [ -74.00247214 , 40.71939226 ]]},
    {fromName: " Forsyth St & Broome St ",toName: " 1 Ave & E 18 St ",coords:[[ -73.99266288 , 40.71893904 ], [ -73.98054420948029 , 40.733812191966315 ]]},
    {fromName: " Willoughby Ave & Hall St ",toName: " Flushing Ave & Vanderbilt Ave ",coords:[[ -73.96536851 , 40.69196035 ], [ -73.97077560424805 , 40.697950315695444 ]]},
    {fromName: " Leonard St & Church St ",toName: " 6 Ave & Spring St ",coords:[[ -74.005549 , 40.717571 ], [ -74.00412082672119 , 40.7252556952547 ]]},
    {fromName: " 2 Ave & E 104 St ",toName: " 2 Ave & E 72 St ",coords:[[ -73.94370784 , 40.7892105 ], [ -73.95840793848038 , 40.7687620293096 ]]},
    {fromName: " W 41 St & 8 Ave ",toName: " E 51 St & Lexington Ave ",coords:[[ -73.9900262 , 40.75640548 ], [ -73.97207836 , 40.75714758 ]]},
    {fromName: " Douglass St & 3 Ave ",toName: " Dean St & 4 Ave ",coords:[[ -73.98432695 , 40.6802133 ], [ -73.97895137 , 40.68312489 ]]},
    {fromName: " W 22 St & 8 Ave ",toName: " 11 Ave & W 27 St ",coords:[[ -73.99915362 , 40.74475148 ], [ -74.005226 , 40.751396 ]]},
    {fromName: " Cleveland Pl & Spring St ",toName: " Mercer St & Bleecker St ",coords:[[ -73.99724900722504 , 40.722103786686034 ], [ -73.99662137031554 , 40.72706363348306 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " W 20 St & 11 Ave ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " Park Ave & E 124 St ",toName: " E 76 St & Park Ave ",coords:[[ -73.9396861 , 40.8045555 ], [ -73.96222088 , 40.773763 ]]},
    {fromName: " W 15 St & 7 Ave ",toName: " 1 Ave & E 68 St ",coords:[[ -73.99931783 , 40.73935542 ], [ -73.95818491 , 40.76500525 ]]},
    {fromName: " Cooper Square & Astor Pl ",toName: " Carmine St & 6 Ave ",coords:[[ -73.99075269699097 , 40.72951496224949 ], [ -74.00214988 , 40.73038599 ]]},
    {fromName: " E 20 St & 2 Ave ",toName: " E 47 St & Park Ave ",coords:[[ -73.98205027 , 40.73587678 ], [ -73.97498696 , 40.75510267 ]]},
    {fromName: " 9 Ave & W 28 St ",toName: " W 21 St & 6 Ave ",coords:[[ -73.99923384189606 , 40.74937024193277 ], [ -73.99415556 , 40.74173969 ]]},
    {fromName: " 11 Ave & W 59 St ",toName: " North Moore St & Greenwich St ",coords:[[ -73.99046033620834 , 40.77149671054441 ], [ -74.0103006362915 , 40.72019521437465 ]]},
    {fromName: " Clinton St & Union St ",toName: " Carroll St & Smith St ",coords:[[ -73.99785267 , 40.6831164 ], [ -73.99475825 , 40.680611 ]]},
    {fromName: " W 47 St & 10 Ave ",toName: " 7 Ave & Central Park South ",coords:[[ -73.99301222 , 40.76269882 ], [ -73.9790689945221 , 40.7667405590595 ]]},
    {fromName: " West Thames St ",toName: " Duane St & Greenwich St ",coords:[[ -74.01713445 , 40.70834698 ], [ -74.0104554 , 40.71748752 ]]},
    {fromName: " Monroe St & Bedford Ave ",toName: " Sterling Pl & Bedford Ave ",coords:[[ -73.95380904 , 40.6851443 ], [ -73.954131 , 40.672695 ]]},
    {fromName: " Front St & Washington St ",toName: " Johnson St & Gold St ",coords:[[ -73.98940236 , 40.70255088 ], [ -73.98362464 , 40.69474881 ]]},
    {fromName: " Lafayette St & E 8 St ",toName: " E 9 St & Avenue C ",coords:[[ -73.99102628231049 , 40.73020660529954 ], [ -73.97768752 , 40.72521311 ]]},
    {fromName: " Cadman Plaza West & Montague St ",toName: " Bergen St & Smith St ",coords:[[ -73.990539 , 40.69383 ], [ -73.99063168 , 40.6867443 ]]},
    {fromName: " W 47 St & 10 Ave ",toName: " 1 Ave & E 30 St ",coords:[[ -73.99301222 , 40.76269882 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " E 106 St & 1 Ave ",toName: " 2 Ave & E 99 St ",coords:[[ -73.93956237 , 40.7892529 ], [ -73.94552579 , 40.7862586 ]]},
    {fromName: " 6 Ave & 9 St ",toName: " Plaza St West & Flatbush Ave ",coords:[[ -73.98377641 , 40.668127 ], [ -73.97111473 , 40.6750207 ]]},
    {fromName: " Bedford Ave & Bergen St ",toName: " Lincoln Pl & Classon Ave ",coords:[[ -73.952918 , 40.676368 ], [ -73.9609 , 40.6721683 ]]},
    {fromName: " E 20 St & FDR Drive ",toName: " 1 Ave & E 30 St ",coords:[[ -73.97573881 , 40.73314259 ], [ -73.97536082 , 40.74144387 ]]},
    {fromName: " Broadway & W 60 St ",toName: " E 58 St & 3 Ave ",coords:[[ -73.98191841 , 40.76915505 ], [ -73.96724467 , 40.76095756 ]]},
    {fromName: " 11 Ave & W 59 St ",toName: " W 52 St & 5 Ave ",coords:[[ -73.99046033620834 , 40.77149671054441 ], [ -73.97648516 , 40.75992262 ]]},
    {fromName: " Broadway & E 22 St ",toName: " 8 Ave & W 31 St ",coords:[[ -73.98955109 , 40.7403432 ], [ -73.9946848154068 , 40.7505853470215 ]]},
    {fromName: " Sullivan St & Washington Sq ",toName: " Broadway & W 25 St ",coords:[[ -73.99906065 , 40.73047747 ], [ -73.98918628692627 , 40.74286877312112 ]]},
    {fromName: " Lexington Ave & Classon Ave ",toName: " Milton St & Franklin St ",coords:[[ -73.95928168 , 40.68676793 ], [ -73.95779 , 40.72906 ]]},
    {fromName: " St James Pl & Pearl St ",toName: " Spruce St & Nassau St ",coords:[[ -74.00016545 , 40.71117416 ], [ -74.00552427 , 40.71146364 ]]},
    {fromName: " St Marks Pl & 1 Ave ",toName: " Cooper Square & Astor Pl ",coords:[[ -73.98564945 , 40.72779126 ], [ -73.99075269699097 , 40.72951496224949 ]]},
    {fromName: " Central Park West & W 72 St ",toName: " Amsterdam Ave & W 66 St ",coords:[[ -73.9762057363987 , 40.77579376683666 ], [ -73.98470567 , 40.7746671 ]]},
    {fromName: " 3 Ave & E 112 St ",toName: " E 123 St & Lexington Ave ",coords:[[ -73.941606 , 40.795508 ], [ -73.9379 , 40.8029263 ]]},
    {fromName: " Allen St & Hester St ",toName: " Norfolk St & Broome St ",coords:[[ -73.99190759 , 40.71605866 ], [ -73.98802084 , 40.7172274 ]]},
    {fromName: " North Moore St & Greenwich St ",toName: " Hudson St & Reade St ",coords:[[ -74.0103006362915 , 40.72019521437465 ], [ -74.0091059 , 40.71625008 ]]},
    {fromName: " Barrow St & Hudson St ",toName: " Sullivan St & Washington Sq ",coords:[[ -74.00674436 , 40.73172428 ], [ -73.99906065 , 40.73047747 ]]},
    {fromName: " Humboldt St & Varet St ",toName: " W 13 St & 5 Ave ",coords:[[ -73.940636 , 40.7031724 ], [ -73.99431 , 40.735445 ]]},
    {fromName: " 9 Ave & W 45 St ",toName: " Broadway & W 49 St ",coords:[[ -73.9912551 , 40.76019252 ], [ -73.9845272898674 , 40.76068327096592 ]]},
    {fromName: " E 13 St & Avenue A ",toName: " W 24 St & 7 Ave ",coords:[[ -73.98067966103554 , 40.72966729392978 ], [ -73.99529885 , 40.74487634 ]]},
    {fromName: " E 13 St & Avenue A ",toName: " Cooper Square & Astor Pl ",coords:[[ -73.98067966103554 , 40.72966729392978 ], [ -73.99075269699097 , 40.72951496224949 ]]},
    {fromName: " 6 Ave & W 33 St ",toName: " W 55 St & 6 Ave ",coords:[[ -73.98848395 , 40.74901271 ], [ -73.9783501625061 , 40.76309387270797 ]]},
    {fromName: " 6 Ave & W 33 St ",toName: " Broadway & W 36 St ",coords:[[ -73.98848395 , 40.74901271 ], [ -73.98765428 , 40.75097711 ]]},
    {fromName: " W 42 St & 8 Ave ",toName: " Broadway & W 49 St ",coords:[[ -73.99098507 , 40.7575699 ], [ -73.9845272898674 , 40.76068327096592 ]]},
    {fromName: " W 49 St & 8 Ave ",toName: " W 47 St & 10 Ave ",coords:[[ -73.98788205 , 40.76227205 ], [ -73.99301222 , 40.76269882 ]]},
    {fromName: " W 49 St & 8 Ave ",toName: " 9 Ave & W 45 St ",coords:[[ -73.98788205 , 40.76227205 ], [ -73.9912551 , 40.76019252 ]]},
    {fromName: " Scholes St & Manhattan Ave ",toName: " Union Ave & Wallabout St ",coords:[[ -73.9448625 , 40.70870368 ], [ -73.95032283 , 40.70029511 ]]},
    {fromName: " W 22 St & 8 Ave ",toName: " W 20 St & 11 Ave ",coords:[[ -73.99915362 , 40.74475148 ], [ -74.007756 , 40.746745 ]]},
    {fromName: " 6 Ave & 12 St ",toName: " Underhill Ave & Lincoln Pl ",coords:[[ -73.9854617 , 40.6663181 ], [ -73.9671457 , 40.6740123 ]]},
    {fromName: " W 38 St & 8 Ave ",toName: " E 41 St & Madison Ave ",coords:[[ -73.99138152 , 40.75466591 ], [ -73.97992193698882 , 40.752165280621966 ]]},
    {fromName: " Clermont Ave & Park Ave ",toName: " DeKalb Ave & Hudson Ave ",coords:[[ -73.97129668 , 40.69573398 ], [ -73.981013 , 40.689888 ]]},
    {fromName: " St James Pl & Pearl St ",toName: " Front St & Maiden Ln ",coords:[[ -74.00016545 , 40.71117416 ], [ -74.00612572 , 40.70530954 ]]},
    {fromName: " 8 Ave & W 31 St ",toName: " 8 Ave & W 52 St ",coords:[[ -73.9946848154068 , 40.7505853470215 ], [ -73.9851615 , 40.76370739 ]]},
    {fromName: " E 52 St & 2 Ave ",toName: " E 47 St & 1 Ave ",coords:[[ -73.967416 , 40.756014 ], [ -73.96784384 , 40.75206862 ]]},
    {fromName: " E 15 St & 3 Ave ",toName: " E 17 St & Broadway ",coords:[[ -73.986923 , 40.734232 ], [ -73.99009296 , 40.73704984 ]]},
    {fromName: " Centre St & Chambers St ",toName: " North Moore St & Greenwich St ",coords:[[ -74.0046073 , 40.71273266 ], [ -74.0103006362915 , 40.72019521437465 ]]},
    {fromName: " 1 Ave & E 18 St ",toName: " E 15 St & 3 Ave ",coords:[[ -73.98054420948029 , 40.733812191966315 ], [ -73.986923 , 40.734232 ]]},
    {fromName: " Clinton St & Grand St ",toName: " Fulton St & William St ",coords:[[ -73.9870295 , 40.71559509 ], [ -74.00653609 , 40.70955958 ]]},
    {fromName: " Suffolk St & Stanton St ",toName: " Lafayette St & Jersey St ",coords:[[ -73.98517977 , 40.72066442 ], [ -73.99600982666016 , 40.72430527250332 ]]},
    {fromName: " Allen St & Hester St ",toName: " Allen St & Rivington St ",coords:[[ -73.99190759 , 40.71605866 ], [ -73.98997825 , 40.72019576 ]]},
    {fromName: " E 48 St & 5 Ave ",toName: " W 49 St & 8 Ave ",coords:[[ -73.97805914282799 , 40.75724567911726 ], [ -73.98788205 , 40.76227205 ]]}

];





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
                "2019-3"
            ],
            "selected": {
                "2019-3": true
            },
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
//series是在地图上的线条等效果的配置文件，具体可以查阅文档。
    series: [{
        name: "2019-3",
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
            "arrow"
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
    }],
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
            return '从'+params.data.fromName+'去'+params.data.toName;

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
    // 添加海量点数据
    var points=[];

    get(points, -73.98128127 , 40.78720869 ," Riverside Dr & W 82 St ");
    get(points, -73.94968539476395 , 40.784596798848916 ," 3 Ave & E 95 St ");
    get(points, -73.9783501625061 , 40.76309387270797 ," W 55 St & 6 Ave ");
    get(points, -73.98165557 , 40.73221853 ," 1 Ave & E 16 St ");
    get(points, -73.9590097 , 40.77677702 ," E 81 St & Park Ave ");
    get(points, -73.96865397691727 , 40.758996559605116 ," E 55 St & 3 Ave ");
    get(points, -73.95779 , 40.72906 ," Milton St & Franklin St ");
    get(points, -73.97498696 , 40.75510267 ," E 47 St & Park Ave ");
    get(points, -73.97966069 , 40.74394314 ," E 31 St & 3 Ave ");
    get(points, -73.99884222 , 40.76030096 ," 11 Ave & W 41 St ");
    get(points, -73.976806 , 40.739445 ," E 27 St & 1 Ave ");
    get(points, -73.98257732391357 , 40.75668720603179 ," W 45 St & 6 Ave ");
    get(points, -74.01020234 , 40.71291224 ," Barclay St & Church St ");
    get(points, -73.99931783 , 40.73935542 ," W 15 St & 7 Ave ");
    get(points, -73.96703464 , 40.7691572 ," E 68 St & Madison Ave ");
    get(points, -73.99548059 , 40.70037867 ," Columbia Heights & Cranberry St ");
    get(points, -73.952029 , 40.7160751 ," Union Ave & Jackson St ");
    get(points, -73.97992193698882 , 40.752165280621966 ," E 41 St & Madison Ave ");
    get(points, -73.9851615 , 40.76370739 ," 8 Ave & W 52 St ");
    get(points, -73.95380904 , 40.6851443 ," Monroe St & Bedford Ave ");
    get(points, -73.98721619 , 40.75299641 ," Broadway & W 38 St ");
    get(points, -74.009447 , 40.711066 ," Fulton St & Broadway ");
    get(points, -73.99800419 , 40.73532427 ," W 11 St & 6 Ave ");
    get(points, -74.0046073 , 40.71273266 ," Centre St & Chambers St ");
    get(points, -74.0046073 , 40.71273266 ," Centre St & Chambers St ");
    get(points, -73.99266288 , 40.71893904 ," Forsyth St & Broome St ");
    get(points, -73.96865397691727 , 40.758996559605116 ," E 55 St & 3 Ave ");
    get(points, -73.99599099 , 40.6787242 ," Smith St & 3 St ");
    get(points, -74.005226 , 40.751396 ," 11 Ave & W 27 St ");
    get(points, -73.9912551 , 40.76019252 ," 9 Ave & W 45 St ");
    get(points, -73.99884222 , 40.76030096 ," 11 Ave & W 41 St ");
    get(points, -73.97371465 , 40.7643971 ," Grand Army Plaza & Central Park S ");
    get(points, -73.98215353488922 , 40.74311555376486 ," Lexington Ave & E 29 St ");
    get(points, -73.99994661 , 40.73781509 ," W 13 St & 7 Ave ");
    get(points, -73.98672378 , 40.73047309 ," E 11 St & 2 Ave ");
    get(points, -73.99093085 , 40.75019995 ," W 33 St & 7 Ave ");
    get(points, -73.954692 , 40.805159 ," Frederick Douglass Blvd & W 117 St ");
    get(points, -73.99973337 , 40.71910537 ," Howard St & Centre St ");
    get(points, -73.95850939 , 40.71745169 ," N 6 St & Bedford Ave ");
    get(points, -73.97728532552719 , 40.7801839724239 ," W 76 St & Columbus Ave ");
    get(points, -73.9870295 , 40.71559509 ," Clinton St & Grand St ");
    get(points, -73.97898475 , 40.7770575 ," Columbus Ave & W 72 St ");
    get(points, -73.962408 , 40.678045 ," Grand Ave & Bergen St ");
    get(points, -73.98713956 , 40.7284186 ," St Marks Pl & 2 Ave ");
    get(points, -73.98014437 , 40.75500254 ," W 44 St & 5 Ave ");
    get(points, -73.99994661 , 40.73781509 ," W 13 St & 7 Ave ");
    get(points, -73.9442507 , 40.8014866 ," E 118 St & Madison Ave ");
    get(points, -74.00711384 , 40.73291553 ," Christopher St & Greenwich St ");
    get(points, -73.99266288 , 40.71893904 ," Forsyth St & Broome St ");
    get(points, -73.98191841 , 40.76915505 ," Broadway & W 60 St ");
    get(points, -73.99800419 , 40.73532427 ," W 11 St & 6 Ave ");
    get(points, -73.96165072917938 , 40.72036775298455 ," Kent Ave & N 7 St ");
    get(points, -73.96930575370789 , 40.75763227739443 ," E 53 St & 3 Ave ");
    get(points, -73.98990025 , 40.71427487 ," Canal St & Rutgers St ");
    get(points, -73.9854617 , 40.6663181 ," 6 Ave & 12 St ");
    get(points, -74.00887308 , 40.70717936 ," William St & Pine St ");
    get(points, -73.99074142 , 40.73454567 ," Broadway & E 14 St ");
    get(points, -73.98191841 , 40.76915505 ," Broadway & W 60 St ");
    get(points, -73.98192338 , 40.7652654 ," Broadway & W 56 St ");
    get(points, -73.97431458 , 40.68539567 ," S Portland Ave & Hanson Pl ");
    get(points, -73.95348296 , 40.76663814 ," E 72 St & York Ave ");
    get(points, -73.9904394 , 40.668603 ," 12 St & 4 Ave ");
    get(points, -73.98303529 , 40.74444921 ," E 30 St & Park Ave S ");
    get(points, -73.9783501625061 , 40.76309387270797 ," W 55 St & 6 Ave ");
    get(points, -73.99266288 , 40.71893904 ," Forsyth St & Broome St ");
    get(points, -74.013012 , 40.7149787 ," Murray St & West St ");
    get(points, -73.96427392959595 , 40.77632142182271 ," 5 Ave & E 78 St ");
    get(points, -73.97282625 , 40.75255434 ," E 45 St & 3 Ave ");
    get(points, -73.971518 , 40.766368 ," 5 Ave & E 63 St ");
    get(points, -73.971518 , 40.766368 ," 5 Ave & E 63 St ");
    get(points, -73.9286078 , 40.7703743 ," 30 Ave & 21 St ");
    get(points, -73.99726235 , 40.74238787 ," W 20 St & 7 Ave ");
    get(points, -73.98093133 , 40.78339981 ," W 78 St & Broadway ");
    get(points, -74.00838676 , 40.7037992 ," Old Slip & Front St ");
    get(points, -73.97109243 , 40.76350532 ," E 59 St & Madison Ave ");
    get(points, -73.99810231 , 40.72917025 ," LaGuardia Pl & W 3 St ");
    get(points, -73.98154004 , 40.6792788 ," Douglass St & 4 Ave ");
    get(points, -73.99994661 , 40.73781509 ," W 13 St & 7 Ave ");
    get(points, -74.00674436 , 40.73172428 ," Barrow St & Hudson St ");
    get(points, -73.959223 , 40.759107 ," E 60 St & York Ave ");
    get(points, -73.99392888 , 40.76727216 ," W 52 St & 11 Ave ");
    get(points, -73.99266288 , 40.71893904 ," Forsyth St & Broome St ");
    get(points, -74.00681753 , 40.74334935 ," W 16 St & The High Line ");
    get(points, -73.96222088 , 40.773763 ," E 76 St & Park Ave ");
    get(points, -73.98490707 , 40.74765947 ," E 33 St & 5 Ave ");
    get(points, -74.005226 , 40.751396 ," 11 Ave & W 27 St ");
    get(points, -73.99102628231049 , 40.73020660529954 ," Lafayette St & E 8 St ");
    get(points, -74.00926027 , 40.7047177 ," Pearl St & Hanover Square ");
    get(points, -73.9471673 , 40.7839636 ," 2 Ave & E 96 St ");
    get(points, -74.00234737 , 40.72165481 ," Grand St & Greene St ");
    get(points, -73.99529885 , 40.74487634 ," W 24 St & 7 Ave ");
    get(points, -73.99093085 , 40.75019995 ," W 33 St & 7 Ave ");
    get(points, -73.989111 , 40.722055 ," Allen St & Stanton St ");
    get(points, -73.959223 , 40.759107 ," E 60 St & York Ave ");
    get(points, -73.99009296 , 40.73704984 ," E 17 St & Broadway ");
    get(points, -73.95520135760307 , 40.71816969454208 ," Driggs Ave & N 9 St ");
    get(points, -74.00218427181244 , 40.75018156325683 ," W 27 St & 10 Ave ");
    get(points, -73.984844 , 40.713126 ," Madison St & Montgomery St ");
    get(points, -73.98808416 , 40.74854862 ," Broadway & W 32 St ");
    get(points, -73.99461843 , 40.76009437 ," W 43 St & 10 Ave ");
    get(points, -74.009447 , 40.711066 ," Fulton St & Broadway ");
    get(points, -73.99612349 , 40.69089272 ," Henry St & Atlantic Ave ");
    get(points, -74.007756 , 40.746745 ," W 20 St & 11 Ave ");
    get(points, -74.00483091 , 40.73535398 ," Perry St & Bleecker St ");
    get(points, -73.97031366 , 40.75968085 ," E 55 St & Lexington Ave ");
    get(points, -74.01658354 , 40.7153379 ," Vesey Pl & River Terrace ");
    get(points, -73.97992193698882 , 40.752165280621966 ," E 41 St & Madison Ave ");
    get(points, -74.005226 , 40.751396 ," 11 Ave & W 27 St ");
    get(points, -73.99093085 , 40.75019995 ," W 33 St & 7 Ave ");
    get(points, -73.98583620786667 , 40.72307749068673 ," E 2 St & Avenue A ");
    get(points, -74.007756 , 40.746745 ," W 20 St & 11 Ave ");
    get(points, -73.98713956 , 40.7284186 ," St Marks Pl & 2 Ave ");
    get(points, -73.96930575370789 , 40.75763227739443 ," E 53 St & 3 Ave ");
    get(points, -73.97728532552719 , 40.7801839724239 ," W 76 St & Columbus Ave ");
    get(points, -73.941275 , 40.7485 ," 27 St & Hunter St ");
    get(points, -73.9576801 , 40.6707767 ," Eastern Pkwy & Franklin Ave ");
    get(points, -73.95818491 , 40.76500525 ," 1 Ave & E 68 St ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -73.993934 , 40.751551 ," 8 Ave & W 33 St ");
    get(points, -73.99662137031554 , 40.72706363348306 ," Mercer St & Bleecker St ");
    get(points, -73.976806 , 40.739445 ," E 27 St & 1 Ave ");
    get(points, -73.98257732391357 , 40.75668720603179 ," W 45 St & 6 Ave ");
    get(points, -73.95324736833572 , 40.814394437915816 ," W 129 St & Convent Ave ");
    get(points, -73.98303529 , 40.74444921 ," E 30 St & Park Ave S ");
    get(points, -73.99431 , 40.735445 ," W 13 St & 5 Ave ");
    get(points, -73.937261 , 40.796879 ," E 116 St & 2 Ave ");
    get(points, -73.96961715 , 40.78472675 ," Central Park West & W 85 St ");
    get(points, -73.98583620786667 , 40.72307749068673 ," E 2 St & Avenue A ");
    get(points, -73.9851615 , 40.76370739 ," 8 Ave & W 52 St ");
    get(points, -73.99852205 , 40.73226398 ," MacDougal St & Washington Sq ");
    get(points, -73.99238967 , 40.73726186 ," E 16 St & 5 Ave ");
    get(points, -73.986923 , 40.734232 ," E 15 St & 3 Ave ");
    get(points, -74.00451887 , 40.74691959 ," W 22 St & 10 Ave ");
    get(points, -73.99667444 , 40.76341379 ," W 46 St & 11 Ave ");
    get(points, -73.97374737 , 40.77896784 ," Central Park West & W 76 St ");
    get(points, -73.98215353488922 , 40.74311555376486 ," Lexington Ave & E 29 St ");
    get(points, -73.97523209452629 , 40.675146838709786 ," Berkeley Pl & 7 Ave ");
    get(points, -73.976806 , 40.739445 ," E 27 St & 1 Ave ");
    get(points, -74.007756 , 40.746745 ," W 20 St & 11 Ave ");
    get(points, -73.97402311 , 40.7597108 ," E 53 St & Madison Ave ");
    get(points, -73.99379025 , 40.72743423 ," Great Jones St ");
    get(points, -73.98940236 , 40.70255088 ," Front St & Washington St ");
    get(points, -73.98517977 , 40.72066442 ," Suffolk St & Stanton St ");
    get(points, -73.98215353488922 , 40.74311555376486 ," Lexington Ave & E 29 St ");
    get(points, -74.00293877 , 40.73401143 ," W 4 St & 7 Ave S ");
    get(points, -73.96592080593109 , 40.76780080148132 ," E 67 St & Park Ave ");
    get(points, -74.00722156 , 40.70862144 ," John St & William St ");
    get(points, -74.00722156 , 40.70862144 ," John St & William St ");
    get(points, -74.00413691997528 , 40.74294891660091 ," W 17 St & 9 Ave ");
    get(points, -74.00165855884552 , 40.72494672359416 ," W Broadway & Spring Street ");
    get(points, -73.99973337 , 40.71910537 ," Howard St & Centre St ");
    get(points, -74.005226 , 40.751396 ," 11 Ave & W 27 St ");
    get(points, -73.98368779 , 40.72217444 ," E 2 St & Avenue B ");
    get(points, -73.9739 , 40.7921 ," W 92 St & Broadway ");
    get(points, -74.00711384 , 40.73291553 ," Christopher St & Greenwich St ");
    get(points, -73.98336183 , 40.76228826 ," Broadway & W 51 St ");
    get(points, -73.97982001304626 , 40.76132983124814 ," W 52 St & 6 Ave ");
    get(points, -73.96226227283478 , 40.75892386377695 ," E 58 St & 1 Ave (NE Corner) ");
    get(points, -73.98855723 , 40.7462009 ," Broadway & W 29 St ");
    get(points, -73.993934 , 40.751551 ," 8 Ave & W 33 St ");
    get(points, -74.00398269295692 , 40.73756121181137 ," W 12 St & W 4 St ");
    get(points, -73.97738662 , 40.7381765 ," E 25 St & 1 Ave ");
    get(points, -73.9845272898674 , 40.76068327096592 ," Broadway & W 49 St ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -73.99974372 , 40.71602118 ," Bayard St & Baxter St ");
    get(points, -73.945925 , 40.804038 ," Mt Morris Park W & W 120 St ");
    get(points, -73.99238967 , 40.73726186 ," E 16 St & 5 Ave ");
    get(points, -73.971878855 , 40.7546011026 ," E 48 St & 3 Ave ");
    get(points, -74.01167797 , 40.70365182 ," Broad St & Bridge St ");
    get(points, -74.0103006362915 , 40.72019521437465 ," North Moore St & Greenwich St ");
    get(points, -73.99529885 , 40.74487634 ," W 24 St & 7 Ave ");
    get(points, -73.98690506 , 40.76584941 ," W 54 St & 9 Ave ");
    get(points, -73.9607082 , 40.8067581 ," W 116 St & Amsterdam Ave ");
    get(points, -73.99203074 , 40.6902375 ," Court St & State St ");
    get(points, -73.99009296 , 40.73704984 ," E 17 St & Broadway ");
    get(points, -73.99102628231049 , 40.73020660529954 ," Lafayette St & E 8 St ");
    get(points, -73.977112 , 40.7867947 ," W 84 St & Broadway ");
    get(points, -73.993934 , 40.751551 ," 8 Ave & W 33 St ");
    get(points, -73.963198 , 40.716887 ," Wythe Ave & Metropolitan Ave ");
    get(points, -73.99138152 , 40.75466591 ," W 38 St & 8 Ave ");
    get(points, -73.98955109 , 40.7403432 ," Broadway & E 22 St ");
    get(points, -73.98379855 , 40.72621788 ," E 7 St & Avenue A ");
    get(points, -74.008591 , 40.728846 ," Greenwich St & W Houston St ");
    get(points, -73.98955109 , 40.7403432 ," Broadway & E 22 St ");
    get(points, -73.97573881 , 40.73314259 ," E 20 St & FDR Drive ");
    get(points, -73.98054420948029 , 40.733812191966315 ," 1 Ave & E 18 St ");
    get(points, -74.00935515761375 , 40.71334184275907 ," Park Pl & Church St ");
    get(points, -73.99102628231049 , 40.73020660529954 ," Lafayette St & E 8 St ");
    get(points, -73.99293911 , 40.71406667 ," Pike St & E Broadway ");
    get(points, -73.9471673 , 40.7839636 ," 2 Ave & E 96 St ");
    get(points, -73.97574813 , 40.72368361 ," Avenue D & E 8 St ");
    get(points, -73.98303529 , 40.74444921 ," E 30 St & Park Ave S ");
    get(points, -74.01020234 , 40.71291224 ," Barclay St & Church St ");
    get(points, -73.97668709 , 40.72228087 ," E 6 St & Avenue D ");
    get(points, -73.98765474557877 , 40.67909799721684 ," Union St & Nevins St ");
    get(points, -73.98205027 , 40.73587678 ," E 20 St & 2 Ave ");
    get(points, -74.005226 , 40.751396 ," 11 Ave & W 27 St ");
    get(points, -73.97966069 , 40.74394314 ," E 31 St & 3 Ave ");
    get(points, -73.99994661 , 40.73781509 ," W 13 St & 7 Ave ");
    get(points, -73.99490341544151 , 40.73143724085228 ," University Pl & E 8 St ");
    get(points, -74.00293877 , 40.73401143 ," W 4 St & 7 Ave S ");
    get(points, -73.95796783 , 40.70708701 ," Division Ave & Marcy Ave ");
    get(points, -73.98955109 , 40.7403432 ," Broadway & E 22 St ");
    get(points, -73.9430681 , 40.8107922 ," Lenox Ave & W 130 St ");
    get(points, -73.9814832 , 40.6751622 ," Carroll St & 5 Ave ");
    get(points, -73.97966069 , 40.74394314 ," E 31 St & 3 Ave ");
    get(points, -73.95033068 , 40.7904828 ," E 102 St & Park Ave ");
    get(points, -73.96599590778351 , 40.683238654603414 ," Fulton St & Waverly Ave ");
    get(points, -73.98261428 , 40.77163851 ," W 63 St & Broadway ");
    get(points, -73.9430681 , 40.8107922 ," Lenox Ave & W 130 St ");
    get(points, -73.96841526031494 , 40.707644944175705 ," Kent Ave & S 11 St ");
    get(points, -73.9523 , 40.7987859 ," Lenox Ave & W 111 St ");
    get(points, -73.981346 , 40.714215 ," Henry St & Grand St ");
    get(points, -73.96592976 , 40.75455731 ," E 51 St & 1 Ave ");
    get(points, -74.00214988 , 40.73038599 ," Carmine St & 6 Ave ");
    get(points, -73.942954 , 40.80295 ," Madison Ave & E 120 St ");
    get(points, -73.97283406 , 40.78499979 ," W 84 St & Columbus Ave ");
    get(points, -73.99923384189606 , 40.74937024193277 ," 9 Ave & W 28 St ");
    get(points, -73.989111 , 40.722055 ," Allen St & Stanton St ");
    get(points, -73.98093044757842 , 40.77966809007312 ," Amsterdam Ave & W 73 St ");
    get(points, -73.99480012 , 40.72317958 ," Mott St & Prince St ");
    get(points, -74.00926027 , 40.7047177 ," Pearl St & Hanover Square ");
    get(points, -74.00214988 , 40.73038599 ," Carmine St & 6 Ave ");
    get(points, -73.99098507 , 40.7575699 ," W 42 St & 8 Ave ");
    get(points, -74.0021163 , 40.75594159 ," W 34 St & 11 Ave ");
    get(points, -73.98564945 , 40.72779126 ," St Marks Pl & 1 Ave ");
    get(points, -73.99600982666016 , 40.72430527250332 ," Lafayette St & Jersey St ");
    get(points, -73.9783501625061 , 40.76309387270797 ," W 55 St & 6 Ave ");
    get(points, -73.99009296 , 40.73704984 ," E 17 St & Broadway ");
    get(points, -73.98205027 , 40.73587678 ," E 20 St & 2 Ave ");
    get(points, -73.98426726 , 40.72953837 ," E 11 St & 1 Ave ");
    get(points, -73.95411749 , 40.74232744 ," Vernon Blvd & 50 Ave ");
    get(points, -73.99238967 , 40.73726186 ," E 16 St & 5 Ave ");
    get(points, -73.99344559 , 40.69760127 ," Clark St & Henry St ");
    get(points, -73.930562 , 40.76108 ," Crescent St & 34 Ave ");
    get(points, -73.99392888 , 40.76727216 ," W 52 St & 11 Ave ");
    get(points, -73.99102628231049 , 40.73020660529954 ," Lafayette St & E 8 St ");
    get(points, -73.98517977 , 40.72066442 ," Suffolk St & Stanton St ");
    get(points, -73.98165557 , 40.73221853 ," 1 Ave & E 16 St ");
    get(points, -73.9383 , 40.7923272 ," 1 Ave & E 110 St ");
    get(points, -73.99973337 , 40.71910537 ," Howard St & Centre St ");
    get(points, -73.95772073 , 40.77862688 ," E 84 St & Park Ave ");
    get(points, -73.983293 , 40.741459 ," Lexington Ave & E 26 St ");
    get(points, -73.94965589046478 , 40.78112229934166 ," E 91 St & 2 Ave ");
    get(points, -73.982578 , 40.70224 ," Front St & Gold St ");
    get(points, -73.97371465 , 40.7643971 ," Grand Army Plaza & Central Park S ");
    get(points, -73.95095259 , 40.70877084 ," Stagg St & Union Ave ");
    get(points, -73.99404649 , 40.72903917 ," Washington Pl & Broadway ");
    get(points, -73.99529885 , 40.74487634 ," W 24 St & 7 Ave ");
    get(points, -73.96094022 , 40.7612274 ," 1 Ave & E 62 St ");
    get(points, -73.99431 , 40.735445 ," W 13 St & 5 Ave ");
    get(points, -73.98562431335449 , 40.78057799010334 ," Riverside Dr & W 72 St ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -74.00653609 , 40.70955958 ," Fulton St & William St ");
    get(points, -73.9979009 , 40.75660359 ," W 37 St & 10 Ave ");
    get(points, -74.00711384 , 40.73291553 ," Christopher St & Greenwich St ");
    get(points, -73.99293911 , 40.71406667 ," Pike St & E Broadway ");
    get(points, -73.99293911 , 40.71406667 ," Pike St & E Broadway ");
    get(points, -74.01167797 , 40.70365182 ," Broad St & Bridge St ");
    get(points, -73.96649479866028 , 40.799041392882984 ," W 104 St & Amsterdam Ave ");
    get(points, -73.94733276 , 40.74524768 ," Jackson Ave & 46 Rd ");
    get(points, -73.98721619 , 40.75299641 ," Broadway & W 38 St ");
    get(points, -73.97604882 , 40.7489006 ," E 39 St & 3 Ave ");
    get(points, -73.96409422159195 , 40.77118287540658 ," E 72 St & Park Ave ");
    get(points, -73.95739 , 40.71469 ," Roebling St & N 4 St ");
    get(points, -73.97402311 , 40.7597108 ," E 53 St & Madison Ave ");
    get(points, -73.99461843 , 40.76009437 ," W 43 St & 10 Ave ");
    get(points, -74.00197139 , 40.7454973 ," 9 Ave & W 22 St ");
    get(points, -74.00218427181244 , 40.75018156325683 ," W 27 St & 10 Ave ");
    get(points, -74.001384973526 , 40.741021509002664 ," W 16 St & 8 Ave ");
    get(points, -73.9396861 , 40.8045555 ," Park Ave & E 124 St ");
    get(points, -73.96024116 , 40.71534825 ," Metropolitan Ave & Bedford Ave ");
    get(points, -73.9559308 , 40.8038654 ," Frederick Douglass Blvd & W 115 St ");
    get(points, -73.95850939 , 40.71745169 ," N 6 St & Bedford Ave ");
    get(points, -73.94100005 , 40.71247661 ," Bushwick Ave & Powers St ");
    get(points, -73.993915 , 40.746647 ," W 27 St & 7 Ave ");
    get(points, -73.97449783980846 , 40.74322681432173 ," E 33 St & 1 Ave ");
    get(points, -73.99238967 , 40.73726186 ," E 16 St & 5 Ave ");
    get(points, -73.977706 , 40.751873 ," Pershing Square North ");
    get(points, -73.97573881 , 40.73314259 ," E 20 St & FDR Drive ");
    get(points, -73.98316936 , 40.75527307 ," W 43 St & 6 Ave ");
    get(points, -73.96409422159195 , 40.77118287540658 ," E 72 St & Park Ave ");
    get(points, -73.97982001304626 , 40.76132983124814 ," W 52 St & 6 Ave ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -73.94965589046478 , 40.78112229934166 ," E 91 St & 2 Ave ");
    get(points, -73.955637216568 , 40.67759206937376 ," Dean St & Franklin Ave ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -73.944694 , 40.686203 ," Monroe St & Tompkins Ave ");
    get(points, -74.01713445 , 40.70834698 ," West Thames St ");
    get(points, -73.9489196240902 , 40.782454175279874 ," E 93 St & 2 Ave ");
    get(points, -73.96409422159195 , 40.77118287540658 ," E 72 St & Park Ave ");
    get(points, -73.9362541 , 40.7945663 ," E 114 St & 1 Ave ");
    get(points, -74.00681753 , 40.74334935 ," W 16 St & The High Line ");
    get(points, -73.988639 , 40.768254 ," W 56 St & 10 Ave ");
    get(points, -73.94860294 , 40.7859201 ," E 97 St & 3 Ave ");
    get(points, -73.99075269699097 , 40.72951496224949 ," Cooper Square & Astor Pl ");
    get(points, -73.97137 , 40.78275 ," W 82 St & Central Park West ");
    get(points, -73.98721619 , 40.75299641 ," Broadway & W 38 St ");
    get(points, -73.99102628231049 , 40.73020660529954 ," Lafayette St & E 8 St ");
    get(points, -73.99144871 , 40.74395411 ," W 25 St & 6 Ave ");
    get(points, -74.01167797 , 40.70365182 ," Broad St & Bridge St ");
    get(points, -73.96224617958069 , 40.76712840349542 ," E 68 St & 3 Ave ");
    get(points, -73.99810231 , 40.72917025 ," LaGuardia Pl & W 3 St ");
    get(points, -73.99344559 , 40.69760127 ," Clark St & Henry St ");
    get(points, -74.00016545 , 40.71117416 ," St James Pl & Pearl St ");
    get(points, -73.99009296 , 40.73704984 ," E 17 St & Broadway ");
    get(points, -73.99203074 , 40.6902375 ," Court St & State St ");
    get(points, -74.01361706 , 40.70463334 ," Broadway & Battery Pl ");
    get(points, -73.98379855 , 40.72621788 ," E 7 St & Avenue A ");
    get(points, -73.9787282 , 40.6740886 ," Carroll St & 6 Ave ");
    get(points, -74.00965965 , 40.72405549 ," Watts St & Greenwich St ");
    get(points, -73.99144871 , 40.74395411 ," W 25 St & 6 Ave ");
    get(points, -74.01677685 , 40.70569254 ," Little West St & 1 Pl ");
    get(points, -74.00167 , 40.707873 ," Peck Slip & Front St ");
    get(points, -73.9790689945221 , 40.7667405590595 ," 7 Ave & Central Park South ");
    get(points, -73.98490707 , 40.74765947 ," E 33 St & 5 Ave ");
    get(points, -74.00562789 , 40.71450451 ," Reade St & Broadway ");
    get(points, -73.98362492 , 40.78414472 ," Riverside Dr & W 78 St ");
    get(points, -74.008119 , 40.739323 ," Washington St & Gansevoort St ");
    get(points, -74.00026394 , 40.73224119 ," Washington Pl & 6 Ave ");
    get(points, -74.008119 , 40.739323 ," Washington St & Gansevoort St ");
    get(points, -73.96592080593109 , 40.76780080148132 ," E 67 St & Park Ave ");
    get(points, -73.98165557 , 40.73221853 ," 1 Ave & E 16 St ");
    get(points, -74.00165855884552 , 40.72494672359416 ," W Broadway & Spring Street ");
    get(points, -73.984844 , 40.713126 ," Madison St & Montgomery St ");
    get(points, -73.98802084 , 40.7172274 ," Norfolk St & Broome St ");
    get(points, -73.957481 , 40.7857851 ," 5 Ave & E 93 St ");
    get(points, -73.97449783980846 , 40.74322681432173 ," E 33 St & 1 Ave ");
    get(points, -73.95520135760307 , 40.71816969454208 ," Driggs Ave & N 9 St ");
    get(points, -73.977706 , 40.751873 ," Pershing Square North ");
    get(points, -73.98990025 , 40.71427487 ," Canal St & Rutgers St ");
    get(points, -73.98336183 , 40.76228826 ," Broadway & W 51 St ");
    get(points, -74.013012 , 40.7149787 ," Murray St & West St ");
    get(points, -73.97768752 , 40.72521311 ," E 9 St & Avenue C ");
    get(points, -73.94434 , 40.72557 ," Nassau Ave & Russell St ");
    get(points, -73.9912551 , 40.76019252 ," 9 Ave & W 45 St ");
    get(points, -73.97371465 , 40.7643971 ," Grand Army Plaza & Central Park S ");
    get(points, -73.99379025 , 40.72743423 ," Great Jones St ");
    get(points, -73.990539 , 40.69383 ," Cadman Plaza West & Montague St ");
    get(points, -73.97402311 , 40.7597108 ," E 53 St & Madison Ave ");
    get(points, -73.98338988 , 40.75038009 ," W 37 St & 5 Ave ");
    get(points, -73.96699104 , 40.804213 ," Cathedral Pkwy & Broadway ");
    get(points, -74.01322069 , 40.71754834 ," West St & Chambers St ");
    get(points, -73.99931783 , 40.73935542 ," W 15 St & 7 Ave ");
    get(points, -73.9851615 , 40.76370739 ," 8 Ave & W 52 St ");
    get(points, -73.9561677 , 40.6758324 ," Franklin Ave & St Marks Ave ");
    get(points, -73.98978041 , 40.7262807 ," E 4 St & 2 Ave ");
    get(points, -73.99723551 , 40.74734825 ," W 26 St & 8 Ave ");
    get(points, -74.00367558002472 , 40.7435337324616 ," W 18 St & 9 Ave ");
    get(points, -73.98895053 , 40.666287 ," 14 St & 5 Ave ");
    get(points, -73.96784384 , 40.75206862 ," E 47 St & 1 Ave ");
    get(points, -74.001384973526 , 40.741021509002664 ," W 16 St & 8 Ave ");
    get(points, -74.01043382 , 40.70905623 ," Liberty St & Broadway ");
    get(points, -74.00218427181244 , 40.75018156325683 ," W 27 St & 10 Ave ");
    get(points, -73.98918628692627 , 40.74286877312112 ," Broadway & W 25 St ");
    get(points, -74.00711384 , 40.73291553 ," Christopher St & Greenwich St ");
    get(points, -74.000271 , 40.735238 ," Greenwich Ave & Charles St ");
    get(points, -73.96226227283478 , 40.75892386377695 ," E 58 St & 1 Ave (NE Corner) ");
    get(points, -73.97895137 , 40.68312489 ," Dean St & 4 Ave ");
    get(points, -73.99009296 , 40.73704984 ," E 17 St & Broadway ");
    get(points, -73.97402311 , 40.7597108 ," E 53 St & Madison Ave ");
    get(points, -73.95299117 , 40.72708584 ," Meserole Ave & Manhattan Ave ");
    get(points, -73.98266566 , 40.77492513 ," W 67 St & Broadway ");
    get(points, -73.953149 , 40.809725 ," St Nicholas Ave & Manhattan Ave ");
    get(points, -73.99046033620834 , 40.77149671054441 ," 11 Ave & W 59 St ");
    get(points, -73.97604882 , 40.7489006 ," E 39 St & 3 Ave ");
    get(points, -74.00026394 , 40.73224119 ," Washington Pl & 6 Ave ");
    get(points, -73.98917958140373 , 40.763604677958625 ," W 50 St & 9 Ave ");
    get(points, -73.98997825 , 40.72019576 ," Allen St & Rivington St ");
    get(points, -73.977112 , 40.7867947 ," W 84 St & Broadway ");
    get(points, -73.99596 , 40.718822 ," Grand St & Elizabeth St ");
    get(points, -73.987167 , 40.695065 ," Jay St & Tech Pl ");
    get(points, -73.99596 , 40.718822 ," Grand St & Elizabeth St ");
    get(points, -73.99596 , 40.718822 ," Grand St & Elizabeth St ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -73.9680438 , 40.6794388 ," Bergen St & Vanderbilt Ave ");
    get(points, -73.95348296 , 40.76663814 ," E 72 St & York Ave ");
    get(points, -73.99075269699097 , 40.72951496224949 ," Cooper Square & Astor Pl ");
    get(points, -73.9262231 , 40.7569332 ," 34 St & 35 Ave ");
    get(points, -73.97854971 , 40.6795766 ," Baltic St & 5 Ave ");
    get(points, -73.98025184869766 , 40.754120810779256 ," E 43 St & 5 Ave ");
    get(points, -73.99915362 , 40.74475148 ," W 22 St & 8 Ave ");
    get(points, -74.01129573583603 , 40.7277140777778 ," Pier 40 - Hudson River Park ");
    get(points, -73.986923 , 40.734232 ," E 15 St & 3 Ave ");
    get(points, -73.98564945 , 40.72779126 ," St Marks Pl & 1 Ave ");
    get(points, -73.99480012 , 40.72317958 ," Mott St & Prince St ");
    get(points, -73.9535166 , 40.77140426 ," 1 Ave & E 78 St ");
    get(points, -73.98368779 , 40.72217444 ," E 2 St & Avenue B ");
    get(points, -73.96784384 , 40.75206862 ," E 47 St & 1 Ave ");
    get(points, -73.98602213 , 40.74096374 ," E 24 St & Park Ave S ");
    get(points, -73.96865397691727 , 40.758996559605116 ," E 55 St & 3 Ave ");
    get(points, -74.00016545 , 40.71117416 ," St James Pl & Pearl St ");
    get(points, -73.99529885 , 40.74487634 ," W 24 St & 7 Ave ");
    get(points, -74.00026394 , 40.73224119 ," Washington Pl & 6 Ave ");
    get(points, -73.99200509 , 40.73492695 ," University Pl & E 14 St ");
    get(points, -73.96905301 , 40.75001986 ," 1 Ave & E 44 St ");
    get(points, -73.97402311 , 40.7597108 ," E 53 St & Madison Ave ");
    get(points, -73.99266288 , 40.71893904 ," Forsyth St & Broome St ");
    get(points, -73.98940236 , 40.70255088 ," Front St & Washington St ");
    get(points, -73.944846 , 40.7989445 ," E 115 St & Madison Ave ");
    get(points, -73.96724467 , 40.76095756 ," E 58 St & 3 Ave ");
    get(points, -73.9786517 , 40.7829391 ," Amsterdam Ave & W 79 St ");
    get(points, -73.97973776 , 40.73912601 ," E 25 St & 2 Ave ");
    get(points, -73.97519523 , 40.6793307 ," Prospect Pl & 6 Ave ");
    get(points, -73.97498696 , 40.75510267 ," E 47 St & Park Ave ");
    get(points, -73.99510132 , 40.73331967 ," E 10 St & 5 Ave ");
    get(points, -73.98765428 , 40.75097711 ," Broadway & W 36 St ");
    get(points, -73.98490707 , 40.74765947 ," E 33 St & 5 Ave ");
    get(points, -74.00618026 , 40.73652889 ," Bank St & Hudson St ");
    get(points, -73.95249933 , 40.7922553 ," 5 Ave & E 103 St ");
    get(points, -73.98541675 , 40.6704922 ," 7 St & 5 Ave ");
    get(points, -73.95818491 , 40.76500525 ," 1 Ave & E 68 St ");
    get(points, -73.97283406 , 40.78499979 ," W 84 St & Columbus Ave ");
    get(points, -73.968896 , 40.693261 ," Clinton Ave & Myrtle Ave ");
    get(points, -73.9535166 , 40.77140426 ," 1 Ave & E 78 St ");
    get(points, -73.97809472 , 40.736502 ," E 23 St & 1 Ave ");
    get(points, -74.0127234 , 40.70255065 ," Water - Whitehall Plaza ");
    get(points, -73.97728532552719 , 40.7801839724239 ," W 76 St & Columbus Ave ");
    get(points, -73.97283406 , 40.78499979 ," W 84 St & Columbus Ave ");
    get(points, -73.99596 , 40.718822 ," Grand St & Elizabeth St ");
    get(points, -73.99144871 , 40.74395411 ," W 25 St & 6 Ave ");
    get(points, -74.01713445 , 40.70834698 ," West Thames St ");
    get(points, -73.98721619 , 40.75299641 ," Broadway & W 38 St ");
    get(points, -73.98918628692627 , 40.74286877312112 ," Broadway & W 25 St ");
    get(points, -73.944507 , 40.715143 ," Graham Ave & Conselyea St ");
    get(points, -73.98788205 , 40.76227205 ," W 49 St & 8 Ave ");
    get(points, -73.9596082 , 40.6765198 ," Classon Ave & St Marks Ave ");
    get(points, -73.94965589046478 , 40.78112229934166 ," E 91 St & 2 Ave ");
    get(points, -73.97793172 , 40.72082834 ," Avenue D & E 3 St ");
    get(points, -74.0104554 , 40.71748752 ," Duane St & Greenwich St ");
    get(points, -73.97484126 , 40.6711978 ," Garfield Pl & 8 Ave ");
    get(points, -74.00277668 , 40.76087502 ," 12 Ave & W 40 St ");
    get(points, -73.98713956 , 40.7284186 ," St Marks Pl & 2 Ave ");
    get(points, -74.009447 , 40.711066 ," Fulton St & Broadway ");
    get(points, -73.976682 , 40.68691865 ," Lafayette Ave & Fort Greene Pl ");
    get(points, -73.9916 , 40.749156 ," W 31 St & 7 Ave ");
    get(points, -73.99063168 , 40.6867443 ," Bergen St & Smith St ");
    get(points, -73.9851615 , 40.76370739 ," 8 Ave & W 52 St ");
    get(points, -73.95427465438843 , 40.774779448957275 ," E 81 St & 2 Ave ");
    get(points, -73.98205027 , 40.73587678 ," E 20 St & 2 Ave ");
    get(points, -73.955613 , 40.799484 ," Central Park North & Adam Clayton Powell Blvd ");
    get(points, -73.98205027 , 40.73587678 ," E 20 St & 2 Ave ");
    get(points, -73.99600982666016 , 40.72430527250332 ," Lafayette St & Jersey St ");
    get(points, -73.97668709 , 40.72228087 ," E 6 St & Avenue D ");
    get(points, -73.97634151 , 40.76590936 ," Central Park S & 6 Ave ");
    get(points, -73.99200509 , 40.73492695 ," University Pl & E 14 St ");
    get(points, -73.97632328 , 40.68382604 ," Atlantic Ave & Fort Greene Pl ");
    get(points, -73.96885458 , 40.68940747 ," DeKalb Ave & Vanderbilt Ave ");
    get(points, -73.98194829 , 40.7457121 ," E 32 St & Park Ave ");
    get(points, -73.984844 , 40.713126 ," Madison St & Montgomery St ");
    get(points, -73.95818491 , 40.76500525 ," 1 Ave & E 68 St ");
    get(points, -73.99009296 , 40.73704984 ," E 17 St & Broadway ");
    get(points, -73.99510132 , 40.73331967 ," E 10 St & 5 Ave ");
    get(points, -73.989111 , 40.722055 ," Allen St & Stanton St ");
    get(points, -73.98888587951659 , 40.777507027547976 ," Riverside Blvd & W 67 St ");
    get(points, -73.96845281124115 , 40.76800889305947 ," E 66 St & Madison Ave ");
    get(points, -74.013012 , 40.7149787 ," Murray St & West St ");
    get(points, -73.98602213 , 40.74096374 ," E 24 St & Park Ave S ");
    get(points, -73.98918695747852 , 40.77515953434235 ," W 64 St & Thelonious Monk Circle ");
    get(points, -73.99238967 , 40.73726186 ," E 16 St & 5 Ave ");
    get(points, -73.98990025 , 40.71427487 ," Canal St & Rutgers St ");
    get(points, -73.98068914 , 40.69839895 ," Nassau St & Navy St ");
    get(points, -73.98775226 , 40.6750705 ," 3 St & 3 Ave ");
    get(points, -73.99193043 , 40.71173107 ," Pike St & Monroe St ");
    get(points, -73.96119945 , 40.76873687 ," 3 Ave & E 71 St ");
    get(points, -73.99548059 , 40.70037867 ," Columbia Heights & Cranberry St ");
    get(points, -73.98266566 , 40.77492513 ," W 67 St & Broadway ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -73.971888 , 40.7937704 ," W 95 St & Broadway ");
    get(points, -73.99994661 , 40.73781509 ," W 13 St & 7 Ave ");
    get(points, -73.98067966103554 , 40.72966729392978 ," E 13 St & Avenue A ");
    get(points, -73.95818491 , 40.76500525 ," 1 Ave & E 68 St ");
    get(points, -73.97402311 , 40.7597108 ," E 53 St & Madison Ave ");
    get(points, -73.97032517 , 40.75323098 ," E 47 St & 2 Ave ");
    get(points, -73.97728532552719 , 40.7801839724239 ," W 76 St & Columbus Ave ");
    get(points, -73.968896 , 40.693261 ," Clinton Ave & Myrtle Ave ");
    get(points, -73.99301222 , 40.76269882 ," W 47 St & 10 Ave ");
    get(points, -73.99379968643188 , 40.75898481399634 ," W 42 St & Dyer Ave ");
    get(points, -73.98918628692627 , 40.74286877312112 ," Broadway & W 25 St ");
    get(points, -73.9796772 , 40.68683208 ," 3 Ave & Schermerhorn St ");
    get(points, -73.98690506 , 40.76584941 ," W 54 St & 9 Ave ");
    get(points, -73.99147535 , 40.72229346 ," Stanton St & Chrystie St ");
    get(points, -73.989111 , 40.722055 ," Allen St & Stanton St ");
    get(points, -73.97668709 , 40.72228087 ," E 6 St & Avenue D ");
    get(points, -73.97648516 , 40.75992262 ," W 52 St & 5 Ave ");
    get(points, -73.98316936 , 40.75527307 ," W 43 St & 6 Ave ");
    get(points, -73.99682619 , 40.71117444 ," Catherine St & Monroe St ");
    get(points, -73.99203074 , 40.6902375 ," Court St & State St ");
    get(points, -74.0103006362915 , 40.72019521437465 ," North Moore St & Greenwich St ");
    get(points, -73.97950418293476 , 40.72746420692392 ," E 11 St & Avenue B ");
    get(points, -73.9845272898674 , 40.76068327096592 ," Broadway & W 49 St ");
    get(points, -74.01361706 , 40.70463334 ," Broadway & Battery Pl ");
    get(points, -73.99075269699097 , 40.72951496224949 ," Cooper Square & Astor Pl ");
    get(points, -74.0091059 , 40.71625008 ," Hudson St & Reade St ");
    get(points, -73.98917958140373 , 40.763604677958625 ," W 50 St & 9 Ave ");
    get(points, -74.0103006362915 , 40.72019521437465 ," North Moore St & Greenwich St ");
    get(points, -73.98191841 , 40.76915505 ," Broadway & W 60 St ");
    get(points, -73.99475825 , 40.680611 ," Carroll St & Smith St ");
    get(points, -74.00504082441329 , 40.70831794366396 ," Cliff St & Fulton St ");
    get(points, -73.9333349 , 40.7949879 ," Pleasant Ave & E 116 St ");
    get(points, -73.98054420948029 , 40.733812191966315 ," 1 Ave & E 18 St ");
    get(points, -73.98690506 , 40.76584941 ," W 54 St & 9 Ave ");
    get(points, -73.98379855 , 40.72621788 ," E 7 St & Avenue A ");
    get(points, -73.98266566 , 40.77492513 ," W 67 St & Broadway ");
    get(points, -74.008119 , 40.739323 ," Washington St & Gansevoort St ");
    get(points, -74.01122331619263 , 40.714851505262516 ," Murray St & Greenwich St ");
    get(points, -74.008119 , 40.739323 ," Washington St & Gansevoort St ");
    get(points, -73.97634151 , 40.76590936 ," Central Park S & 6 Ave ");
    get(points, -73.98855723 , 40.7462009 ," Broadway & W 29 St ");
    get(points, -73.9468208 , 40.7724607 ," E 82 St & East End Ave ");
    get(points, -73.97791 , 40.751581 ," Pershing Square South ");
    get(points, -73.97209525108337 , 40.76302594280519 ," E 58 St & Madison Ave ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -73.96024116 , 40.71534825 ," Metropolitan Ave & Bedford Ave ");
    get(points, -74.00247214 , 40.71939226 ," Lispenard St & Broadway ");
    get(points, -73.98683077 , 40.7451677 ," 5 Ave & E 29 St ");
    get(points, -73.98602213 , 40.74096374 ," E 24 St & Park Ave S ");
    get(points, -73.98368779 , 40.72217444 ," E 2 St & Avenue B ");
    get(points, -73.98192338 , 40.7652654 ," Broadway & W 56 St ");
    get(points, -73.9311847 , 40.7974772 ," Pleasant Ave & E 120 St ");
    get(points, -74.00026394 , 40.73224119 ," Washington Pl & 6 Ave ");
    get(points, -73.98490707 , 40.74765947 ," E 33 St & 5 Ave ");
    get(points, -74.001384973526 , 40.741021509002664 ," W 16 St & 8 Ave ");
    get(points, -73.99138152 , 40.75466591 ," W 38 St & 8 Ave ");
    get(points, -74.00264 , 40.752957 ," 10 Hudson Yards ");
    get(points, -74.00859207 , 40.7361967 ," Bank St & Washington St ");
    get(points, -74.01129573583603 , 40.7277140777778 ," Pier 40 - Hudson River Park ");
    get(points, -73.97790759801863 , 40.68506807308177 ," Hanson Pl & Ashland Pl ");
    get(points, -73.98194829 , 40.7457121 ," E 32 St & Park Ave ");
    get(points, -73.9664492472 , 40.8008363 ," W 106 St & Amsterdam Ave ");
    get(points, -73.9607082 , 40.8067581 ," W 116 St & Amsterdam Ave ");
    get(points, -73.97087984 , 40.6729679 ," Grand Army Plaza & Plaza St West ");
    get(points, -73.97628939 , 40.71782143 ," Stanton St & Mangin St ");
    get(points, -73.99949601 , 40.72362738 ," Mercer St & Spring St ");
    get(points, -73.99037292 , 40.6786115 ," Carroll St & Bond St ");
    get(points, -73.945993 , 40.791976 ," E 106 St & Lexington Ave ");
    get(points, -73.98721619 , 40.75299641 ," Broadway & W 38 St ");
    get(points, -73.99662137031554 , 40.72706363348306 ," Mercer St & Bleecker St ");
    get(points, -74.00747358798981 , 40.742753828659026 ," W 15 St & 10 Ave ");
    get(points, -73.941606 , 40.795508 ," 3 Ave & E 112 St ");
    get(points, -73.98067966103554 , 40.72966729392978 ," E 13 St & Avenue A ");
    get(points, -73.993915 , 40.746647 ," W 27 St & 7 Ave ");
    get(points, -73.98261428 , 40.77163851 ," W 63 St & Broadway ");
    get(points, -73.97449783980846 , 40.74322681432173 ," E 33 St & 1 Ave ");
    get(points, -73.9430681 , 40.8107922 ," Lenox Ave & W 130 St ");
    get(points, -73.97992193698882 , 40.752165280621966 ," E 41 St & Madison Ave ");
    get(points, -74.00507032871246 , 40.739448201304036 ," Gansevoort St & Hudson St ");
    get(points, -73.98192338 , 40.7652654 ," Broadway & W 56 St ");
    get(points, -73.95840793848038 , 40.7687620293096 ," 2 Ave & E 72 St ");
    get(points, -74.00234482 , 40.71494807 ," Centre St & Worth St ");
    get(points, -73.97973776 , 40.73912601 ," E 25 St & 2 Ave ");
    get(points, -73.98751968 , 40.73827428 ," E 20 St & Park Ave ");
    get(points, -73.98261428 , 40.77163851 ," W 63 St & Broadway ");
    get(points, -74.00711384 , 40.73291553 ," Christopher St & Greenwich St ");
    get(points, -73.98855723 , 40.7462009 ," Broadway & W 29 St ");
    get(points, -74.0104554 , 40.71748752 ," Duane St & Greenwich St ");
    get(points, -73.981346 , 40.714215 ," Henry St & Grand St ");
    get(points, -73.98451656103134 , 40.688417427540834 ," Schermerhorn St & Bond St ");
    get(points, -73.99200509 , 40.73492695 ," University Pl & E 14 St ");
    get(points, -74.0103006362915 , 40.72019521437465 ," North Moore St & Greenwich St ");
    get(points, -73.98194829 , 40.7457121 ," E 32 St & Park Ave ");
    get(points, -73.99364123 , 40.6777287 ," 3 St & Hoyt St ");
    get(points, -73.981346 , 40.714215 ," Henry St & Grand St ");
    get(points, -73.99596 , 40.718822 ," Grand St & Elizabeth St ");
    get(points, -74.00859207 , 40.7361967 ," Bank St & Washington St ");
    get(points, -73.99009296 , 40.73704984 ," E 17 St & Broadway ");
    get(points, -73.98721619 , 40.75299641 ," Broadway & W 38 St ");
    get(points, -73.981346 , 40.714215 ," Henry St & Grand St ");
    get(points, -73.99724900722504 , 40.722103786686034 ," Cleveland Pl & Spring St ");
    get(points, -73.99906065 , 40.73047747 ," Sullivan St & Washington Sq ");
    get(points, -74.001384973526 , 40.741021509002664 ," W 16 St & 8 Ave ");
    get(points, -73.99293911 , 40.71406667 ," Pike St & E Broadway ");
    get(points, -73.9567526 , 40.77573034 ," E 81 St & 3 Ave ");
    get(points, -73.9605909006 , 40.7981856 ," W 106 St & Central Park West ");
    get(points, -73.98490707 , 40.74765947 ," E 33 St & 5 Ave ");
    get(points, -73.97898475 , 40.7770575 ," Columbus Ave & W 72 St ");
    get(points, -73.99102628231049 , 40.73020660529954 ," Lafayette St & E 8 St ");
    get(points, -73.99923384189606 , 40.74937024193277 ," 9 Ave & W 28 St ");
    get(points, -73.99046033620834 , 40.77149671054441 ," 11 Ave & W 59 St ");
    get(points, -73.99923384189606 , 40.74937024193277 ," 9 Ave & W 28 St ");
    get(points, -73.9590097 , 40.77677702 ," E 81 St & Park Ave ");
    get(points, -73.96286845207214 , 40.79406660818552 ," Central Park West & W 100 St ");
    get(points, -73.98997825 , 40.72019576 ," Allen St & Rivington St ");
    get(points, -73.9614583 , 40.68223166 ," Fulton St & Grand Ave ");
    get(points, -73.97966069 , 40.74394314 ," E 31 St & 3 Ave ");
    get(points, -73.96222069859505 , 40.76471851944339 ," E 65 St & 2 Ave ");
    get(points, -73.96968902 , 40.68764484 ," Clermont Ave & Lafayette Ave ");
    get(points, -73.96885458 , 40.68940747 ," DeKalb Ave & Vanderbilt Ave ");
    get(points, -73.98257732391357 , 40.75668720603179 ," W 45 St & 6 Ave ");
    get(points, -74.00711384 , 40.73291553 ," Christopher St & Greenwich St ");
    get(points, -73.97031366 , 40.75968085 ," E 55 St & Lexington Ave ");
    get(points, -73.97282625 , 40.75255434 ," E 45 St & 3 Ave ");
    get(points, -73.99069656 , 40.72502876 ," E 2 St & 2 Ave ");
    get(points, -73.9471673 , 40.7839636 ," 2 Ave & E 96 St ");
    get(points, -73.97041192 , 40.7973721 ," W 100 St & Broadway ");
    get(points, -73.98564945 , 40.72779126 ," St Marks Pl & 1 Ave ");
    get(points, -73.971878855 , 40.7546011026 ," E 48 St & 3 Ave ");
    get(points, -73.968896 , 40.693261 ," Clinton Ave & Myrtle Ave ");
    get(points, -73.97950418293476 , 40.72746420692392 ," E 11 St & Avenue B ");
    get(points, -73.98859651 , 40.75929124 ," W 45 St & 8 Ave ");
    get(points, -73.95482273 , 40.7689738 ," E 74 St & 1 Ave ");
    get(points, -73.94818595 , 40.70411791 ," Lorimer St & Broadway ");
    get(points, -74.00562789 , 40.71450451 ," Reade St & Broadway ");
    get(points, -73.99662137031554 , 40.72706363348306 ," Mercer St & Bleecker St ");
    get(points, -73.967416 , 40.756014 ," E 52 St & 2 Ave ");
    get(points, -73.98205027 , 40.73587678 ," E 20 St & 2 Ave ");
    get(points, -73.98918628692627 , 40.74286877312112 ," Broadway & W 25 St ");
    get(points, -73.98918628692627 , 40.74286877312112 ," Broadway & W 25 St ");
    get(points, -73.98067966103554 , 40.72966729392978 ," E 13 St & Avenue A ");
    get(points, -73.96685276 , 40.77282817 ," 5 Ave & E 73 St ");
    get(points, -74.01322069 , 40.71754834 ," West St & Chambers St ");
    get(points, -73.944507 , 40.715143 ," Graham Ave & Conselyea St ");
    get(points, -73.98473765 , 40.73624527 ," E 19 St & 3 Ave ");
    get(points, -74.005226 , 40.751396 ," 11 Ave & W 27 St ");
    get(points, -73.94818595 , 40.70411791 ," Lorimer St & Broadway ");
    get(points, -73.96063148975372 , 40.70924826276157 ," Broadway & Roebling St ");
    get(points, -73.99600982666016 , 40.72430527250332 ," Lafayette St & Jersey St ");
    get(points, -73.98997825 , 40.72019576 ," Allen St & Rivington St ");
    get(points, -74.00277668 , 40.76087502 ," 12 Ave & W 40 St ");
    get(points, -73.99600982666016 , 40.72430527250332 ," Lafayette St & Jersey St ");
    get(points, -73.98990025 , 40.71427487 ," Canal St & Rutgers St ");
    get(points, -73.98955109 , 40.7403432 ," Broadway & E 22 St ");
    get(points, -74.01043382 , 40.70905623 ," Liberty St & Broadway ");
    get(points, -74.00612572 , 40.70530954 ," Front St & Maiden Ln ");
    get(points, -73.99785768 , 40.6746957 ," Smith St & 9 St ");
    get(points, -73.98918628692627 , 40.74286877312112 ," Broadway & W 25 St ");
    get(points, -73.96286845207214 , 40.79406660818552 ," Central Park West & W 100 St ");
    get(points, -74.01677685 , 40.70569254 ," Little West St & 1 Pl ");
    get(points, -74.00674436 , 40.73172428 ," Barrow St & Hudson St ");
    get(points, -73.98316936 , 40.75527307 ," W 43 St & 6 Ave ");
    get(points, -74.00747358798981 , 40.742753828659026 ," W 15 St & 10 Ave ");
    get(points, -73.9845272898674 , 40.76068327096592 ," Broadway & W 49 St ");
    get(points, -73.96905301 , 40.75001986 ," 1 Ave & E 44 St ");
    get(points, -73.97265183 , 40.68753406 ," Cumberland St & Lafayette Ave ");
    get(points, -73.99810231 , 40.72917025 ," LaGuardia Pl & W 3 St ");
    get(points, -73.94308 , 40.72325 ," Driggs Ave & N Henry St ");
    get(points, -73.95427465438843 , 40.774779448957275 ," E 81 St & 2 Ave ");
    get(points, -73.99724900722504 , 40.722103786686034 ," Cleveland Pl & Spring St ");
    get(points, -73.98895053 , 40.666287 ," 14 St & 5 Ave ");
    get(points, -73.97121214 , 40.744219 ," FDR Drive & E 35 St ");
    get(points, -73.98261428 , 40.77163851 ," W 63 St & Broadway ");
    get(points, -74.00413691997528 , 40.74294891660091 ," W 17 St & 9 Ave ");
    get(points, -73.99344559 , 40.69760127 ," Clark St & Henry St ");
    get(points, -73.960876 , 40.710451 ," S 5 Pl & S 5 St ");
    get(points, -73.9946848154068 , 40.7505853470215 ," 8 Ave & W 31 St ");
    get(points, -73.98997825 , 40.72019576 ," Allen St & Rivington St ");
    get(points, -73.95068615 , 40.77565541 ," E 84 St & 1 Ave ");
    get(points, -73.99810231 , 40.72917025 ," LaGuardia Pl & W 3 St ");
    get(points, -73.97950418293476 , 40.72746420692392 ," E 11 St & Avenue B ");
    get(points, -73.993934 , 40.751551 ," 8 Ave & W 33 St ");
    get(points, -73.97634151 , 40.76590936 ," Central Park S & 6 Ave ");
    get(points, -73.960876 , 40.710451 ," S 5 Pl & S 5 St ");
    get(points, -73.98949474096298 , 40.692418292578466 ," Fulton St & Adams St ");
    get(points, -73.981346 , 40.714215 ," Henry St & Grand St ");
    get(points, -73.98918695747852 , 40.77515953434235 ," W 64 St & Thelonious Monk Circle ");
    get(points, -73.98165557 , 40.73221853 ," 1 Ave & E 16 St ");
    get(points, -73.97371465 , 40.7643971 ," Grand Army Plaza & Central Park S ");
    get(points, -73.97634151 , 40.76590936 ," Central Park S & 6 Ave ");
    get(points, -73.99723551 , 40.74734825 ," W 26 St & 8 Ave ");
    get(points, -73.95608 , 40.70934 ," S 4 St & Rodney St ");
    get(points, -73.94776493310928 , 40.809495347779475 ," Adam Clayton Powell Blvd & W 126 St ");
    get(points, -73.97706058 , 40.74290902 ," 2 Ave & E 31 St ");
    get(points, -73.99158043 , 40.73261787 ," E 11 St & Broadway ");
    get(points, -74.01234218 , 40.70122128 ," South St & Whitehall St ");
    get(points, -73.96648977 , 40.76440023 ," Lexington Ave & E 63 St ");
    get(points, -73.99973337 , 40.71910537 ," Howard St & Centre St ");
    get(points, -73.986274 , 40.720747 ," Stanton St & Norfolk St ");
    get(points, -73.99906065 , 40.73047747 ," Sullivan St & Washington Sq ");
    get(points, -74.00293877 , 40.73401143 ," W 4 St & 7 Ave S ");
    get(points, -74.00887308 , 40.70717936 ," William St & Pine St ");
    get(points, -73.993934 , 40.751551 ," 8 Ave & W 33 St ");
    get(points, -73.9535166 , 40.77140426 ," 1 Ave & E 78 St ");
    get(points, -73.98085795 , 40.7208736 ," E 2 St & Avenue C ");
    get(points, -73.98368779 , 40.72217444 ," E 2 St & Avenue B ");
    get(points, -73.98918628692627 , 40.74286877312112 ," Broadway & W 25 St ");
    get(points, -73.95411749 , 40.74232744 ," Vernon Blvd & 50 Ave ");
    get(points, -73.983293 , 40.741459 ," Lexington Ave & E 26 St ");
    get(points, -73.9523 , 40.7987859 ," Lenox Ave & W 111 St ");
    get(points, -73.98955109 , 40.7403432 ," Broadway & E 22 St ");
    get(points, -73.9523 , 40.7987859 ," Lenox Ave & W 111 St ");
    get(points, -73.9900262 , 40.75640548 ," W 41 St & 8 Ave ");
    get(points, -74.01322069 , 40.71754834 ," West St & Chambers St ");
    get(points, -74.001384973526 , 40.741021509002664 ," W 16 St & 8 Ave ");
    get(points, -73.9762057363987 , 40.77579376683666 ," Central Park West & W 72 St ");
    get(points, -73.98765428 , 40.75097711 ," Broadway & W 36 St ");
    get(points, -73.96295 , 40.802692 ," W 110 St & Amsterdam Ave ");
    get(points, -73.990539 , 40.69383 ," Cadman Plaza West & Montague St ");
    get(points, -73.98949474096298 , 40.692418292578466 ," Fulton St & Adams St ");
    get(points, -73.98918628692627 , 40.74286877312112 ," Broadway & W 25 St ");
    get(points, -74.0103006362915 , 40.72019521437465 ," North Moore St & Greenwich St ");
    get(points, -74.00674436 , 40.73172428 ," Barrow St & Hudson St ");
    get(points, -73.96069399 , 40.7781314 ," Madison Ave & E 82 St ");
    get(points, -73.94977234 , 40.74708586 ," 45 Rd & 11 St ");
    get(points, -73.98432695 , 40.6802133 ," Douglass St & 3 Ave ");
    get(points, -73.9347774 , 40.7668 ," Broadway & 12 St ");
    get(points, -73.99974372 , 40.71602118 ," Bayard St & Baxter St ");
    get(points, -73.98268129 , 40.76344058 ," Broadway & W 53 St ");
    get(points, -73.99337909 , 40.69239502 ," Clinton St & Joralemon St ");
    get(points, -73.9762057363987 , 40.77579376683666 ," Central Park West & W 72 St ");
    get(points, -73.9333349 , 40.7949879 ," Pleasant Ave & E 116 St ");
    get(points, -73.96286845207214 , 40.79406660818552 ," Central Park West & W 100 St ");
    get(points, -73.98918628692627 , 40.74286877312112 ," Broadway & W 25 St ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -73.99645295 , 40.6861758 ," Kane St & Clinton St ");
    get(points, -73.97573881 , 40.73314259 ," E 20 St & FDR Drive ");
    get(points, -74.0021163 , 40.75594159 ," W 34 St & 11 Ave ");
    get(points, -73.981346 , 40.714215 ," Henry St & Grand St ");
    get(points, -73.98426726 , 40.72953837 ," E 11 St & 1 Ave ");
    get(points, -73.98165557 , 40.73221853 ," 1 Ave & E 16 St ");
    get(points, -74.0046073 , 40.71273266 ," Centre St & Chambers St ");
    get(points, -74.00197139 , 40.7454973 ," 9 Ave & W 22 St ");
    get(points, -73.96885458 , 40.68940747 ," DeKalb Ave & Vanderbilt Ave ");
    get(points, -73.9870295 , 40.71559509 ," Clinton St & Grand St ");
    get(points, -73.9762057363987 , 40.77579376683666 ," Central Park West & W 72 St ");
    get(points, -73.9854617 , 40.6663181 ," 6 Ave & 12 St ");
    get(points, -73.98876585 , 40.6705135 ," 4 Ave & 9 St ");
    get(points, -73.98025184869766 , 40.754120810779256 ," E 43 St & 5 Ave ");
    get(points, -73.97805914282799 , 40.75724567911726 ," E 48 St & 5 Ave ");
    get(points, -73.9681805305 , 40.8021174 ," West End Ave & W 107 St ");
    get(points, -73.96427392959595 , 40.77632142182271 ," 5 Ave & E 78 St ");
    get(points, -73.97982001304626 , 40.76132983124814 ," W 52 St & 6 Ave ");
    get(points, -73.98191841 , 40.76915505 ," Broadway & W 60 St ");
    get(points, -73.98990025 , 40.71427487 ," Canal St & Rutgers St ");
    get(points, -73.9349 , 40.8006721 ," 2 Ave & E 122 St ");
    get(points, -73.98054420948029 , 40.733812191966315 ," 1 Ave & E 18 St ");
    get(points, -73.9762057363987 , 40.77579376683666 ," Central Park West & W 72 St ");
    get(points, -73.97523209452629 , 40.675146838709786 ," Berkeley Pl & 7 Ave ");
    get(points, -73.96024116 , 40.71534825 ," Metropolitan Ave & Bedford Ave ");
    get(points, -73.97790759801863 , 40.68506807308177 ," Hanson Pl & Ashland Pl ");
    get(points, -73.97634151 , 40.76590936 ," Central Park S & 6 Ave ");
    get(points, -73.98304268717766 , 40.68962188790333 ," Bond St & Fulton St ");
    get(points, -73.97992193698882 , 40.752165280621966 ," E 41 St & Madison Ave ");
    get(points, -73.97973776 , 40.73912601 ," E 25 St & 2 Ave ");
    get(points, -73.9489196240902 , 40.782454175279874 ," E 93 St & 2 Ave ");
    get(points, -73.97077560424805 , 40.697950315695444 ," Flushing Ave & Vanderbilt Ave ");
    get(points, -73.981346 , 40.714215 ," Henry St & Grand St ");
    get(points, -74.00197139 , 40.7454973 ," 9 Ave & W 22 St ");
    get(points, -73.9153175 , 40.776165 ," 23 Ave & 27 St ");
    get(points, -73.98564945 , 40.72779126 ," St Marks Pl & 1 Ave ");
    get(points, -74.01043382 , 40.70905623 ," Liberty St & Broadway ");
    get(points, -73.96603308 , 40.75797322 ," E 55 St & 2 Ave ");
    get(points, -73.9647628 , 40.68851534 ," Lafayette Ave & St James Pl ");
    get(points, -73.97992193698882 , 40.752165280621966 ," E 41 St & Madison Ave ");
    get(points, -73.99931783 , 40.73935542 ," W 15 St & 7 Ave ");
    get(points, -73.986274 , 40.720747 ," Stanton St & Norfolk St ");
    get(points, -74.002950346 , 40.749717753 ," W 26 St & 10 Ave ");
    get(points, -74.00887308 , 40.70717936 ," William St & Pine St ");
    get(points, -73.99915362 , 40.74475148 ," W 22 St & 8 Ave ");
    get(points, -73.99915362 , 40.74475148 ," W 22 St & 8 Ave ");
    get(points, -74.00165855884552 , 40.72494672359416 ," W Broadway & Spring Street ");
    get(points, -73.98751968 , 40.73827428 ," E 20 St & Park Ave ");
    get(points, -73.97982001304626 , 40.76132983124814 ," W 52 St & 6 Ave ");
    get(points, -73.9641 , 40.8082 ," W 116 St & Broadway ");
    get(points, -73.97282625 , 40.75255434 ," E 45 St & 3 Ave ");
    get(points, -74.00618026 , 40.73652889 ," Bank St & Hudson St ");
    get(points, -73.97493121 , 40.68981035 ," DeKalb Ave & S Portland Ave ");
    get(points, -73.9441232 , 40.7954121 ," Lexington Ave & E 111 St ");
    get(points, -74.00167 , 40.707873 ," Peck Slip & Front St ");
    get(points, -73.993915 , 40.746647 ," W 27 St & 7 Ave ");
    get(points, -73.977706 , 40.751873 ," Pershing Square North ");
    get(points, -73.96165072917938 , 40.72036775298455 ," Kent Ave & N 7 St ");
    get(points, -73.968087 , 40.7919557 ," Columbus Ave & W 95 St ");
    get(points, -73.97041561 , 40.7882213 ," W 89 St & Columbus Ave ");
    get(points, -73.9605909006 , 40.7981856 ," W 106 St & Central Park West ");
    get(points, -73.95482273 , 40.7689738 ," E 74 St & 1 Ave ");
    get(points, -73.99810231 , 40.72917025 ," LaGuardia Pl & W 3 St ");
    get(points, -73.99596 , 40.718822 ," Grand St & Elizabeth St ");
    get(points, -73.99093085 , 40.75019995 ," W 33 St & 7 Ave ");
    get(points, -73.96703464 , 40.7691572 ," E 68 St & Madison Ave ");
    get(points, -73.95850939 , 40.71745169 ," N 6 St & Bedford Ave ");
    get(points, -73.99973337 , 40.71910537 ," Howard St & Centre St ");
    get(points, -73.98949474096298 , 40.692418292578466 ," Fulton St & Adams St ");
    get(points, -73.96226227283478 , 40.75892386377695 ," E 58 St & 1 Ave (NE Corner) ");
    get(points, -73.9479119 , 40.7519071 ," 11 St & 43 Ave ");
    get(points, -73.98990025 , 40.71427487 ," Canal St & Rutgers St ");
    get(points, -74.00413691997528 , 40.74294891660091 ," W 17 St & 9 Ave ");
    get(points, -74.00167 , 40.707873 ," Peck Slip & Front St ");
    get(points, -73.98154004 , 40.6792788 ," Douglass St & 4 Ave ");
    get(points, -74.00731853 , 40.70706456 ," Maiden Ln & Pearl St ");
    get(points, -73.99009296 , 40.73704984 ," E 17 St & Broadway ");
    get(points, -73.988639 , 40.768254 ," W 56 St & 10 Ave ");
    get(points, -73.98583620786667 , 40.72307749068673 ," E 2 St & Avenue A ");
    get(points, -73.99074142 , 40.73454567 ," Broadway & E 14 St ");
    get(points, -73.98978041 , 40.7262807 ," E 4 St & 2 Ave ");
    get(points, -73.98583620786667 , 40.72307749068673 ," E 2 St & Avenue A ");
    get(points, -73.97648516 , 40.75992262 ," W 52 St & 5 Ave ");
    get(points, -73.9845272898674 , 40.76068327096592 ," Broadway & W 49 St ");
    get(points, -73.9900262 , 40.75640548 ," W 41 St & 8 Ave ");
    get(points, -73.97706058 , 40.74290902 ," 2 Ave & E 31 St ");
    get(points, -73.98683077 , 40.7451677 ," 5 Ave & E 29 St ");
    get(points, -73.99596 , 40.718822 ," Grand St & Elizabeth St ");
    get(points, -73.99431 , 40.735445 ," W 13 St & 5 Ave ");
    get(points, -73.96590294 , 40.71285887 ," S 4 St & Wythe Ave ");
    get(points, -73.99456405 , 40.73971301 ," W 18 St & 6 Ave ");
    get(points, -73.98257732391357 , 40.75668720603179 ," W 45 St & 6 Ave ");
    get(points, -73.99785267 , 40.6831164 ," Clinton St & Union St ");
    get(points, -73.97032517 , 40.75323098 ," E 47 St & 2 Ave ");
    get(points, -73.993934 , 40.751551 ," 8 Ave & W 33 St ");
    get(points, -73.96295 , 40.802692 ," W 110 St & Amsterdam Ave ");
    get(points, -73.99102628231049 , 40.73020660529954 ," Lafayette St & E 8 St ");
    get(points, -74.01322069 , 40.71754834 ," West St & Chambers St ");
    get(points, -73.99138152 , 40.75466591 ," W 38 St & 8 Ave ");
    get(points, -73.97371465 , 40.7643971 ," Grand Army Plaza & Central Park S ");
    get(points, -73.98338988 , 40.75038009 ," W 37 St & 5 Ave ");
    get(points, -73.98776323 , 40.71269042 ," Madison St & Clinton St ");
    get(points, -73.9842844 , 40.69221589 ," Duffield St & Willoughby St ");
    get(points, -73.993934 , 40.751551 ," 8 Ave & W 33 St ");
    get(points, -73.98396846 , 40.663779 ," 14 St & 7 Ave ");
    get(points, -73.9423 , 40.797911 ," E 115 St & Lexington Ave ");
    get(points, -73.99392888 , 40.76727216 ," W 52 St & 11 Ave ");
    get(points, -73.99600982666016 , 40.72430527250332 ," Lafayette St & Jersey St ");
    get(points, -73.97809472 , 40.736502 ," E 23 St & 1 Ave ");
    get(points, -73.98185424 , 40.72453734 ," E 6 St & Avenue B ");
    get(points, -73.99138152 , 40.75466591 ," W 38 St & 8 Ave ");
    get(points, -73.98426726 , 40.72953837 ," E 11 St & 1 Ave ");
    get(points, -74.01658354 , 40.7153379 ," Vesey Pl & River Terrace ");
    get(points, -74.00218427181244 , 40.75018156325683 ," W 27 St & 10 Ave ");
    get(points, -73.99456405 , 40.73971301 ," W 18 St & 6 Ave ");
    get(points, -73.97536082 , 40.74144387 ," 1 Ave & E 30 St ");
    get(points, -73.97498696 , 40.75510267 ," E 47 St & Park Ave ");
    get(points, -73.99490341544151 , 40.73143724085228 ," University Pl & E 8 St ");
    get(points, -73.98316936 , 40.75527307 ," W 43 St & 6 Ave ");
    get(points, -73.96264403 , 40.71260486 ," S 3 St & Bedford Ave ");
    get(points, -73.95779 , 40.72906 ," Milton St & Franklin St ");
    get(points, -73.99915362 , 40.74475148 ," W 22 St & 8 Ave ");
    get(points, -73.981346 , 40.714215 ," Henry St & Grand St ");
    get(points, -73.99144871 , 40.74395411 ," W 25 St & 6 Ave ");
    get(points, -74.00367558002472 , 40.7435337324616 ," W 18 St & 9 Ave ");
    get(points, -73.99337909 , 40.69239502 ," Clinton St & Joralemon St ");
    get(points, -74.00731853 , 40.70706456 ," Maiden Ln & Pearl St ");
    get(points, -73.98192338 , 40.7652654 ," Broadway & W 56 St ");
    get(points, -73.993934 , 40.751551 ," 8 Ave & W 33 St ");
    get(points, -73.99931783 , 40.73935542 ," W 15 St & 7 Ave ");
    get(points, -73.982578 , 40.70224 ," Front St & Gold St ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -73.986274 , 40.720747 ," Stanton St & Norfolk St ");
    get(points, -73.98918628692627 , 40.74286877312112 ," Broadway & W 25 St ");
    get(points, -73.94335788 , 40.75325964 ," 21 St & Queens Plaza North ");
    get(points, -74.001384973526 , 40.741021509002664 ," W 16 St & 8 Ave ");
    get(points, -73.967416 , 40.756014 ," E 52 St & 2 Ave ");
    get(points, -73.9333349 , 40.7949879 ," Pleasant Ave & E 116 St ");
    get(points, -73.99510132 , 40.73331967 ," E 10 St & 5 Ave ");
    get(points, -73.97282625 , 40.75255434 ," E 45 St & 3 Ave ");
    get(points, -73.99193043 , 40.71173107 ," Pike St & Monroe St ");
    get(points, -73.98775226 , 40.6750705 ," 3 St & 3 Ave ");
    get(points, -73.99431 , 40.735445 ," W 13 St & 5 Ave ");
    get(points, -74.01658354 , 40.7153379 ," Vesey Pl & River Terrace ");
    get(points, -73.98352355 , 40.6728155 ," 5 Ave & 3 St ");
    get(points, -73.99098507 , 40.7575699 ," W 42 St & 8 Ave ");
    get(points, -73.94016171 , 40.70767788 ," Montrose Ave & Bushwick Ave ");
    get(points, -74.00670227 , 40.70355377 ," South St & Gouverneur Ln ");
    get(points, -73.993934 , 40.751551 ," 8 Ave & W 33 St ");
    get(points, -73.988639 , 40.768254 ," W 56 St & 10 Ave ");
    get(points, -73.99203074 , 40.6902375 ," Court St & State St ");
    get(points, -73.98426726 , 40.72953837 ," E 11 St & 1 Ave ");
    get(points, -73.98451656103134 , 40.688417427540834 ," Schermerhorn St & Bond St ");
    get(points, -73.99490341544151 , 40.73143724085228 ," University Pl & E 8 St ");
    get(points, -73.98205027 , 40.73587678 ," E 20 St & 2 Ave ");
    get(points, -73.99973337 , 40.71910537 ," Howard St & Centre St ");
    get(points, -73.98192338 , 40.7652654 ," Broadway & W 56 St ");
    get(points, -73.99009296 , 40.73704984 ," E 17 St & Broadway ");
    get(points, -73.96222069859505 , 40.76471851944339 ," E 65 St & 2 Ave ");
    get(points, -73.98432695 , 40.6802133 ," Douglass St & 3 Ave ");
    get(points, -73.983293 , 40.741459 ," Lexington Ave & E 26 St ");
    get(points, -73.981013 , 40.689888 ," DeKalb Ave & Hudson Ave ");
    get(points, -73.98713956 , 40.7284186 ," St Marks Pl & 2 Ave ");
    get(points, -74.0046073 , 40.71273266 ," Centre St & Chambers St ");
    get(points, -73.98014437 , 40.75500254 ," W 44 St & 5 Ave ");
    get(points, -73.98802084 , 40.7172274 ," Norfolk St & Broome St ");
    get(points, -73.99147535 , 40.72229346 ," Stanton St & Chrystie St ");
    get(points, -73.97738662 , 40.7381765 ," E 25 St & 1 Ave ");
    get(points, -73.95411749 , 40.74232744 ," Vernon Blvd & 50 Ave ");
    get(points, -73.98759104 , 40.6864442 ," Dean St & Hoyt St ");
    get(points, -73.97402311 , 40.7597108 ," E 53 St & Madison Ave ");
    get(points, -73.98067966103554 , 40.72966729392978 ," E 13 St & Avenue A ");
    get(points, -74.00566443 , 40.72243797 ," 6 Ave & Canal St ");
    get(points, -74.0103006362915 , 40.72019521437465 ," North Moore St & Greenwich St ");
    get(points, -73.97536082 , 40.74144387 ," 1 Ave & E 30 St ");
    get(points, -73.969024 , 40.6767 ," Park Pl & Vanderbilt Ave ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -73.9671457 , 40.6740123 ," Underhill Ave & Lincoln Pl ");
    get(points, -73.97628939 , 40.71782143 ," Stanton St & Mangin St ");
    get(points, -73.96865397691727 , 40.758996559605116 ," E 55 St & 3 Ave ");
    get(points, -73.95939 , 40.78307 ," 5 Ave & E 88 St ");
    get(points, -73.99144871 , 40.74395411 ," W 25 St & 6 Ave ");
    get(points, -73.97111473 , 40.6750207 ," Plaza St West & Flatbush Ave ");
    get(points, -73.98362464 , 40.69474881 ," Johnson St & Gold St ");
    get(points, -73.957481 , 40.7857851 ," 5 Ave & E 93 St ");
    get(points, -73.977706 , 40.751873 ," Pershing Square North ");
    get(points, -73.993934 , 40.751551 ," 8 Ave & W 33 St ");
    get(points, -73.99404649 , 40.72903917 ," Washington Pl & Broadway ");
    get(points, -73.98054420948029 , 40.733812191966315 ," 1 Ave & E 18 St ");
    get(points, -73.9851615 , 40.76370739 ," 8 Ave & W 52 St ");
    get(points, -73.99098507 , 40.7575699 ," W 42 St & 8 Ave ");
    get(points, -73.94782145 , 40.7961535 ," E 110 St & Madison Ave ");
    get(points, -73.96968902 , 40.68764484 ," Clermont Ave & Lafayette Ave ");
    get(points, -73.97809472 , 40.736502 ," E 23 St & 1 Ave ");
    get(points, -73.98257732391357 , 40.75668720603179 ," W 45 St & 6 Ave ");
    get(points, -73.98797392845154 , 40.735367055605394 ," E 16 St & Irving Pl ");
    get(points, -73.99800419 , 40.73532427 ," W 11 St & 6 Ave ");
    get(points, -73.96841526031494 , 40.707644944175705 ," Kent Ave & S 11 St ");
    get(points, -73.97498696 , 40.75510267 ," E 47 St & Park Ave ");
    get(points, -73.9970468 , 40.71413089 ," Division St & Bowery ");
    get(points, -73.98765428 , 40.75097711 ," Broadway & W 36 St ");
    get(points, -73.97966069 , 40.74394314 ," E 31 St & 3 Ave ");
    get(points, -73.9813018 , 40.69196566 ," Willoughby St & Fleet St ");
    get(points, -73.973736 , 40.697787 ," Carlton Ave & Flushing Ave ");
    get(points, -73.98802084 , 40.7172274 ," Norfolk St & Broome St ");
    get(points, -73.98257732391357 , 40.75668720603179 ," W 45 St & 6 Ave ");
    get(points, -73.9209334552288 , 40.7675487799971 ," 31 St & Newtown Ave ");
    get(points, -73.95939 , 40.78307 ," 5 Ave & E 88 St ");
    get(points, -73.94752621650696 , 40.724812564400175 ," Nassau Ave & Newell St ");
    get(points, -73.955327 , 40.7835016 ," E 91 St & Park Ave ");
    get(points, -73.98473765 , 40.73624527 ," E 19 St & 3 Ave ");
    get(points, -74.00887308 , 40.70717936 ," William St & Pine St ");
    get(points, -73.99724900722504 , 40.722103786686034 ," Cleveland Pl & Spring St ");
    get(points, -74.0103006362915 , 40.72019521437465 ," North Moore St & Greenwich St ");
    get(points, -73.97966069 , 40.74394314 ," E 31 St & 3 Ave ");
    get(points, -73.99990419 , 40.6828003 ," President St & Henry St ");
    get(points, -73.98093133 , 40.78339981 ," W 78 St & Broadway ");
    get(points, -73.9518776 , 40.8114323 ," St. Nicholas Ave & W 126 St ");
    get(points, -74.013012 , 40.7149787 ," Murray St & West St ");
    get(points, -73.97995466 , 40.72299208 ," E 5 St & Avenue C ");
    get(points, -74.00413691997528 , 40.74294891660091 ," W 17 St & 9 Ave ");
    get(points, -73.99915362 , 40.74475148 ," W 22 St & 8 Ave ");
    get(points, -73.9783501625061 , 40.76309387270797 ," W 55 St & 6 Ave ");
    get(points, -73.96592976 , 40.75455731 ," E 51 St & 1 Ave ");
    get(points, -73.98918628692627 , 40.74286877312112 ," Broadway & W 25 St ");
    get(points, -73.99596 , 40.718822 ," Grand St & Elizabeth St ");
    get(points, -74.013012 , 40.7149787 ," Murray St & West St ");
    get(points, -74.000271 , 40.735238 ," Greenwich Ave & Charles St ");
    get(points, -74.0100698 , 40.6753274 ," Wolcott St & Dwight St ");
    get(points, -74.01122331619263 , 40.714851505262516 ," Murray St & Greenwich St ");
    get(points, -73.96603308 , 40.75797322 ," E 55 St & 2 Ave ");
    get(points, -73.99415556 , 40.74173969 ," W 21 St & 6 Ave ");
    get(points, -73.99093085 , 40.75019995 ," W 33 St & 7 Ave ");
    get(points, -73.99074142 , 40.73454567 ," Broadway & E 14 St ");
    get(points, -73.98303529 , 40.74444921 ," E 30 St & Park Ave S ");
    get(points, -74.0091059 , 40.71625008 ," Hudson St & Reade St ");
    get(points, -73.9590255 , 40.8143256 ," Broadway & Moylan Pl ");
    get(points, -73.98602213 , 40.74096374 ," E 24 St & Park Ave S ");
    get(points, -73.98191841 , 40.76915505 ," Broadway & W 60 St ");
    get(points, -73.957145 , 40.801694 ," Frederick Douglass Blvd & W 112 St ");
    get(points, -73.99915362 , 40.74475148 ," W 22 St & 8 Ave ");
    get(points, -73.9870295 , 40.71559509 ," Clinton St & Grand St ");
    get(points, -73.97536082 , 40.74144387 ," 1 Ave & E 30 St ");
    get(points, -73.982578 , 40.70224 ," Front St & Gold St ");
    get(points, -73.94860294 , 40.7859201 ," E 97 St & 3 Ave ");
    get(points, -73.9631611 , 40.6737236 ," St Johns Pl & Washington Ave ");
    get(points, -73.98025184869766 , 40.754120810779256 ," E 43 St & 5 Ave ");
    get(points, -74.00681753 , 40.74334935 ," W 16 St & The High Line ");
    get(points, -73.97282625 , 40.75255434 ," E 45 St & 3 Ave ");
    get(points, -73.99461843 , 40.76009437 ," W 43 St & 10 Ave ");
    get(points, -73.98776323 , 40.71269042 ," Madison St & Clinton St ");
    get(points, -74.005226 , 40.751396 ," 11 Ave & W 27 St ");
    get(points, -73.98955109 , 40.7403432 ," Broadway & E 22 St ");
    get(points, -74.005226 , 40.751396 ," 11 Ave & W 27 St ");
    get(points, -73.96724467 , 40.76095756 ," E 58 St & 3 Ave ");
    get(points, -74.00016545 , 40.71117416 ," St James Pl & Pearl St ");
    get(points, -74.00218427181244 , 40.75018156325683 ," W 27 St & 10 Ave ");
    get(points, -73.96724467 , 40.76095756 ," E 58 St & 3 Ave ");
    get(points, -74.01167797 , 40.70365182 ," Broad St & Bridge St ");
    get(points, -73.98997825 , 40.72019576 ," Allen St & Rivington St ");
    get(points, -74.00771779 , 40.72185379 ," Laight St & Hudson St ");
    get(points, -73.96295 , 40.802692 ," W 110 St & Amsterdam Ave ");
    get(points, -73.99456405 , 40.73971301 ," W 18 St & 6 Ave ");
    get(points, -73.9262231 , 40.7569332 ," 34 St & 35 Ave ");
    get(points, -73.949373 , 40.8078316 ," Adam Clayton Powell Blvd & W 123 St ");
    get(points, -73.98194829 , 40.7457121 ," E 32 St & Park Ave ");
    get(points, -73.9842844 , 40.69221589 ," Duffield St & Willoughby St ");
    get(points, -73.97628939 , 40.71782143 ," Stanton St & Mangin St ");
    get(points, -73.97648516 , 40.75992262 ," W 52 St & 5 Ave ");
    get(points, -74.00722156 , 40.70862144 ," John St & William St ");
    get(points, -74.00412082672119 , 40.7252556952547 ," 6 Ave & Spring St ");
    get(points, -73.9596082 , 40.6765198 ," Classon Ave & St Marks Ave ");
    get(points, -74.001384973526 , 40.741021509002664 ," W 16 St & 8 Ave ");
    get(points, -73.9916 , 40.749156 ," W 31 St & 7 Ave ");
    get(points, -73.99682619 , 40.71117444 ," Catherine St & Monroe St ");
    get(points, -73.957481 , 40.7857851 ," 5 Ave & E 93 St ");
    get(points, -74.01122331619263 , 40.714851505262516 ," Murray St & Greenwich St ");
    get(points, -73.98025184869766 , 40.754120810779256 ," E 43 St & 5 Ave ");
    get(points, -73.98808416 , 40.74854862 ," Broadway & W 32 St ");
    get(points, -73.95482273 , 40.7689738 ," E 74 St & 1 Ave ");
    get(points, -74.00412082672119 , 40.7252556952547 ," 6 Ave & Spring St ");
    get(points, -73.98997825 , 40.72019576 ," Allen St & Rivington St ");
    get(points, -73.97032517 , 40.75323098 ," E 47 St & 2 Ave ");
    get(points, -74.002950346 , 40.749717753 ," W 26 St & 10 Ave ");
    get(points, -73.99093085 , 40.75019995 ," W 33 St & 7 Ave ");
    get(points, -73.97738662 , 40.7381765 ," E 25 St & 1 Ave ");
    get(points, -73.98997825 , 40.72019576 ," Allen St & Rivington St ");
    get(points, -73.976806 , 40.739445 ," E 27 St & 1 Ave ");
    get(points, -73.97950418293476 , 40.72746420692392 ," E 11 St & Avenue B ");
    get(points, -73.96649479866028 , 40.799041392882984 ," W 104 St & Amsterdam Ave ");
    get(points, -73.98855723 , 40.7462009 ," Broadway & W 29 St ");
    get(points, -73.99093085 , 40.75019995 ," W 33 St & 7 Ave ");
    get(points, -73.97137 , 40.78275 ," W 82 St & Central Park West ");
    get(points, -74.00218427181244 , 40.75018156325683 ," W 27 St & 10 Ave ");
    get(points, -73.99379025 , 40.72743423 ," Great Jones St ");
    get(points, -73.98205027 , 40.73587678 ," E 20 St & 2 Ave ");
    get(points, -73.99431 , 40.735445 ," W 13 St & 5 Ave ");
    get(points, -73.97950418293476 , 40.72746420692392 ," E 11 St & Avenue B ");
    get(points, -73.98067966103554 , 40.72966729392978 ," E 13 St & Avenue A ");
    get(points, -73.98602213 , 40.74096374 ," E 24 St & Park Ave S ");
    get(points, -73.945993 , 40.791976 ," E 106 St & Lexington Ave ");
    get(points, -73.97604882 , 40.7489006 ," E 39 St & 3 Ave ");
    get(points, -73.99009296 , 40.73704984 ," E 17 St & Broadway ");
    get(points, -73.97803415 , 40.69608941 ," Park Ave & St Edwards St ");
    get(points, -73.99074142 , 40.73454567 ," Broadway & E 14 St ");
    get(points, -73.98257732391357 , 40.75668720603179 ," W 45 St & 6 Ave ");

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

            bmap.openInfoWindow(infoWindow,e.point); //开启信息窗口

      //  alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat);  // 监听点击事件
    });
    bmap.addOverlay(pointCollection);  // 添加Overlay
    myChart.on('click', function (params) {
        console.log(params);
        alert('从'+params.data.fromName+'去'+params.data.toName);
    });
} else {
    alert('请在chrome、safari、IE8+以上浏览器查看本示例');
}

function get(points,lng,lat,title) {
    var point = new BMap.Point( lng ,lat );
    point.title = title;
    points.push(point);
}