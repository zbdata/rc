<style>
.bg-success-gradient{
background:#28a745;
background:-webkit-gradient(linear,left bottom,left top,color-stop(0,#28a745),color-stop(1,#34ce57));
color: #fff
}
.card{
    box-shadow: 0 0 1px rgba(0,0,0,.125), 0 1px 3px rgba(0,0,0,.2);
}
.callout, .card, .info-box, .mb-3, .my-3, .small-box{
    margin-bottom: 1rem!important;
}
.morris-hover{
    position:absolute;z-index:1090;
}
.morris-hover.morris-default-style{
    border-radius:10px;padding:6px;color:#f9f9f9;background:rgba(0, 0, 0, 0.8);border:solid 2px rgba(0, 0, 0, 0.9);font-weight: 600;font-size:14px;text-align:center;
}
.morris-hover.morris-default-style .morris-hover-row-label{
    font-weight:bold;margin:0.25em 0;
}
.morris-hover.morris-default-style .morris-hover-point{
    white-space:nowrap;margin:0.1em 0;
}

</style>

<template>

    <div class="container">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="row mt-4">
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-info">
                        <div class="inner">
                            <h3>150</h3>
                            <p>Contratos Registrados</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-clipboard-check"></i>
                        </div>
                        <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-success">
                        <div class="inner">
                            <h3>53<sup style="font-size: 20px">%</sup></h3>

                            <p>Bounce Rate</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-warning">
                        <div class="inner">
                            <h3>44</h3>

                            <p>Faturas em aberto</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-clipboard-list"></i>
                        </div>
                        <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-danger">
                        <div class="inner">
                            <h3>65</h3>

                            <p>Serviços Bloqueados</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-building"></i>
                        </div>
                        <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
                <!-- ./col -->
            </div>
            <!-- /.row -->
        </div>


<!-- WIDGETS -->

        <div class="mt-3 row">
          <!-- Left col -->
          <section class="col-lg-7">
            <!-- Custom tabs (Charts with tabs)-->
            <div class="card">
              <div class="card-header d-flex p-0">
                <h3 class="card-title p-3">
                  <i class="fa fa-pie-chart mr-1"></i>
                  Contratos Registrados
                </h3>
              </div><!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content p-0">
                  <!-- Morris chart - Sales -->
                  <div class="chart tab-pane active" id="revenue-chart" style="position: relative; height: 300px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><svg height="300" version="1.1" width="629.828" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative; left: -0.5px;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><text x="49.203125" y="261" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font: 12px sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan></text><path fill="none" stroke="#aaaaaa" d="M61.703125,261H604.828" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="49.203125" y="202" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font: 12px sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">7,500</tspan></text><path fill="none" stroke="#aaaaaa" d="M61.703125,202H604.828" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="49.203125" y="143" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font: 12px sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">15,000</tspan></text><path fill="none" stroke="#aaaaaa" d="M61.703125,143H604.828" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="49.203125" y="84.00000000000003" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font: 12px sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal"><tspan dy="4.000000000000028" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">22,500</tspan></text><path fill="none" stroke="#aaaaaa" d="M61.703125,84.00000000000003H604.828" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="49.203125" y="25.00000000000003" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font: 12px sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal"><tspan dy="4.000000000000028" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">30,000</tspan></text><path fill="none" stroke="#aaaaaa" d="M61.703125,25.00000000000003H604.828" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="505.1506168552552" y="273.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font: 12px sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2013</tspan></text><text x="263.6151317398238" y="273.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font: 12px sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2012</tspan></text><path fill="#579de7" stroke="none" d="M61.703125,219.05493333333334C76.88158444714459,219.56626666666668,107.23850334143378,222.62345,122.41696278857837,221.10026666666667C137.59542223572296,219.57708333333335,167.95234113001214,209.13609859561225,183.13080057715675,206.86946666666668C198.13740246715523,204.62849859561226,228.15060624715218,204.88132019993895,243.15720813715066,203.06986666666666C258.17755863172084,201.25675353327227,288.2182596208612,194.9135027923211,303.23861011543136,192.3712C318.41706956257593,189.80213612565444,348.77398845686514,182.51721666666668,363.9524479040097,182.6244C379.1309073511543,182.73158333333333,409.4878262454435,204.18306539133076,424.6662856925881,193.22866666666667C439.67288758258655,182.39829872466407,469.68609136258357,101.94099634745245,484.69269325258205,95.48533333333336C499.54806049229194,89.09472968078579,529.2587949717117,135.13645416189823,544.1141622114217,141.8436C559.2926216585663,148.6966208285649,589.6495405528553,147.7554,604.828,149.726L604.828,261L61.703125,261Z" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></path><path fill="none" stroke="#007cff" d="M61.703125,219.05493333333334C76.88158444714459,219.56626666666668,107.23850334143378,222.62345,122.41696278857837,221.10026666666667C137.59542223572296,219.57708333333335,167.95234113001214,209.13609859561225,183.13080057715675,206.86946666666668C198.13740246715523,204.62849859561226,228.15060624715218,204.88132019993895,243.15720813715066,203.06986666666666C258.17755863172084,201.25675353327227,288.2182596208612,194.9135027923211,303.23861011543136,192.3712C318.41706956257593,189.80213612565444,348.77398845686514,182.51721666666668,363.9524479040097,182.6244C379.1309073511543,182.73158333333333,409.4878262454435,204.18306539133076,424.6662856925881,193.22866666666667C439.67288758258655,182.39829872466407,469.68609136258357,101.94099634745245,484.69269325258205,95.48533333333336C499.54806049229194,89.09472968078579,529.2587949717117,135.13645416189823,544.1141622114217,141.8436C559.2926216585663,148.6966208285649,589.6495405528553,147.7554,604.828,149.726" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><circle cx="61.703125" cy="219.05493333333334" r="4" fill="#007cff" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="122.41696278857837" cy="221.10026666666667" r="4" fill="#007cff" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="183.13080057715675" cy="206.86946666666668" r="4" fill="#007cff" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="243.15720813715066" cy="203.06986666666666" r="4" fill="#007cff" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="303.23861011543136" cy="192.3712" r="4" fill="#007cff" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="363.9524479040097" cy="182.6244" r="4" fill="#007cff" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="424.6662856925881" cy="193.22866666666667" r="4" fill="#007cff" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="484.69269325258205" cy="95.48533333333336" r="4" fill="#007cff" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="544.1141622114217" cy="141.8436" r="4" fill="#007cff" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="604.828" cy="149.726" r="4" fill="#007cff" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><path fill="#5d646a" stroke="none" d="M61.703125,240.02746666666667C76.88158444714459,239.8072,107.23850334143378,241.35496666666666,122.41696278857837,239.1464C137.59542223572296,236.93783333333334,167.95234113001214,223.33698698853718,183.13080057715675,222.35893333333334C198.13740246715523,221.39195365520382,228.15060624715218,233.23177876984127,243.15720813715066,231.36626666666666C258.17755863172084,229.49904543650794,288.2182596208612,209.28948603839441,303.23861011543136,207.428C318.41706956257593,205.54691937172774,348.77398845686514,214.4391666666667,363.9524479040097,216.39600000000002C379.1309073511543,218.35283333333334,409.4878262454435,232.38159338039932,424.6662856925881,223.08266666666668C439.67288758258655,213.88902671373265,469.68609136258357,148.2241679481277,484.69269325258205,142.42573333333334C499.54806049229194,136.68573461479437,529.2587949717117,170.46886726939806,544.1141622114217,176.92893333333336C559.2926216585663,183.5295006027314,589.6495405528553,190.23343333333335,604.828,194.66826666666668L604.828,261L61.703125,261Z" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></path><path fill="none" stroke="#495057" d="M61.703125,240.02746666666667C76.88158444714459,239.8072,107.23850334143378,241.35496666666666,122.41696278857837,239.1464C137.59542223572296,236.93783333333334,167.95234113001214,223.33698698853718,183.13080057715675,222.35893333333334C198.13740246715523,221.39195365520382,228.15060624715218,233.23177876984127,243.15720813715066,231.36626666666666C258.17755863172084,229.49904543650794,288.2182596208612,209.28948603839441,303.23861011543136,207.428C318.41706956257593,205.54691937172774,348.77398845686514,214.4391666666667,363.9524479040097,216.39600000000002C379.1309073511543,218.35283333333334,409.4878262454435,232.38159338039932,424.6662856925881,223.08266666666668C439.67288758258655,213.88902671373265,469.68609136258357,148.2241679481277,484.69269325258205,142.42573333333334C499.54806049229194,136.68573461479437,529.2587949717117,170.46886726939806,544.1141622114217,176.92893333333336C559.2926216585663,183.5295006027314,589.6495405528553,190.23343333333335,604.828,194.66826666666668" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><circle cx="61.703125" cy="240.02746666666667" r="4" fill="#495057" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="122.41696278857837" cy="239.1464" r="4" fill="#495057" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="183.13080057715675" cy="222.35893333333334" r="4" fill="#495057" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="243.15720813715066" cy="231.36626666666666" r="4" fill="#495057" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="303.23861011543136" cy="207.428" r="4" fill="#495057" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="363.9524479040097" cy="216.39600000000002" r="4" fill="#495057" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="424.6662856925881" cy="223.08266666666668" r="4" fill="#495057" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="484.69269325258205" cy="142.42573333333334" r="4" fill="#495057" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="544.1141622114217" cy="176.92893333333336" r="4" fill="#495057" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="604.828" cy="194.66826666666668" r="4" fill="#495057" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle></svg><div class="morris-hover morris-default-style" style="left: 135.201px; top: 123px; display: none;"><div class="morris-hover-row-label">2011 Q3</div><div class="morris-hover-point" style="color: #495057">
                    Item 1:
                    4,912
                    </div><div class="morris-hover-point" style="color: #007cff">
                    Item 2:
                    1,969
                    </div></div></div>
                  <div class="chart tab-pane" id="sales-chart" style="position: relative; height: 300px;"><svg height="300" version="1.1" width="512" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path fill="none" stroke="#007bff" d="M256,243.33333333333331A93.33333333333333,93.33333333333333,0,0,0,344.2277551949771,180.44625304313007" stroke-width="2" opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"></path><path fill="#007bff" stroke="#ffffff" d="M256,246.33333333333331A96.33333333333333,96.33333333333333,0,0,0,347.06364732624417,181.4248826052307L383.6151459070204,194.03833029452744A135,135,0,0,1,256,285Z" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dc3545" d="M344.2277551949771,180.44625304313007A93.33333333333333,93.33333333333333,0,0,0,172.28484627831412,108.73398312817662" stroke-width="2" opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1;"></path><path fill="#dc3545" stroke="#ffffff" d="M347.06364732624417,181.4248826052307A96.33333333333333,96.33333333333333,0,0,0,169.59400205154566,107.40757544301087L130.42726941747117,88.10097469226493A140,140,0,0,1,388.3416327924656,195.6693795646951Z" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#28a745" d="M172.28484627831412,108.73398312817662A93.33333333333333,93.33333333333333,0,0,0,255.97067846904883,243.333328727518" stroke-width="2" opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"></path><path fill="#28a745" stroke="#ffffff" d="M169.59400205154566,107.40757544301087A96.33333333333333,96.33333333333333,0,0,0,255.96973599126827,246.3333285794739L255.9575884998742,284.9999933380171A135,135,0,0,1,134.9120097954186,90.31165416754118Z" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="256" y="140" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" font-size="15px" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font: 800 15px Arial;" font-weight="800" transform="matrix(1,0,0,1,0,0)"><tspan dy="140" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">In-Store Sales</tspan></text><text x="256" y="160" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font: 14px Arial;" font-size="14px" transform="matrix(1,0,0,1,0,0)"><tspan dy="160" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">30</tspan></text></svg></div>
                </div>
              </div><!-- /.card-body -->
            </div>
            <!-- /.card -->
          </section>
          <!-- /.Left col -->
          <!-- right col (We are only adding the ID to make the widgets sortable)-->
          <section class="col-lg-5">

            <!-- Map card -->
            <div class="card bg-success-gradient" style="position: relative; left: 0px; top: 0px;">
              <div class="card-header no-border">
                <h3 class="card-title">
                  <i class="fa fa-calendar"></i>
                  Calendário de Faturamento
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <!--The calendar -->
                <div id="calendar" style="width: 100%"><div class="datepicker datepicker-inline"><div class="datepicker-days" style="display: block;"><table class="table table-condensed"><thead><tr><th class="prev" style="visibility: visible;">«</th><th colspan="5" class="datepicker-switch">October 2018</th><th class="next" style="visibility: visible;">»</th></tr><tr><th class="dow">Su</th><th class="dow">Mo</th><th class="dow">Tu</th><th class="dow">We</th><th class="dow">Th</th><th class="dow">Fr</th><th class="dow">Sa</th></tr></thead><tbody><tr><td class="old day">30</td><td class="day">1</td><td class="day">2</td><td class="day">3</td><td class="day">4</td><td class="day">5</td><td class="day">6</td></tr><tr><td class="day">7</td><td class="day">8</td><td class="day">9</td><td class="day">10</td><td class="day">11</td><td class="day">12</td><td class="day">13</td></tr><tr><td class="day">14</td><td class="day">15</td><td class="day">16</td><td class="day">17</td><td class="day">18</td><td class="day">19</td><td class="day">20</td></tr><tr><td class="day">21</td><td class="day">22</td><td class="day">23</td><td class="day">24</td><td class="day">25</td><td class="day">26</td><td class="day">27</td></tr><tr><td class="day">28</td><td class="day">29</td><td class="day">30</td><td class="day">31</td><td class="new day">1</td><td class="new day">2</td><td class="new day">3</td></tr><tr><td class="new day">4</td><td class="new day">5</td><td class="new day">6</td><td class="new day">7</td><td class="new day">8</td><td class="new day">9</td><td class="new day">10</td></tr></tbody><tfoot><tr><th colspan="7" class="today" style="display: none;">Today</th></tr><tr><th colspan="7" class="clear" style="display: none;">Clear</th></tr></tfoot></table></div><div class="datepicker-months" style="display: none;"><table class="table table-condensed"><thead><tr><th class="prev" style="visibility: visible;">«</th><th colspan="5" class="datepicker-switch">2018</th><th class="next" style="visibility: visible;">»</th></tr></thead><tbody><tr><td colspan="7"><span class="month">Jan</span><span class="month">Feb</span><span class="month">Mar</span><span class="month">Apr</span><span class="month">May</span><span class="month">Jun</span><span class="month">Jul</span><span class="month">Aug</span><span class="month">Sep</span><span class="month">Oct</span><span class="month">Nov</span><span class="month">Dec</span></td></tr></tbody><tfoot><tr><th colspan="7" class="today" style="display: none;">Today</th></tr><tr><th colspan="7" class="clear" style="display: none;">Clear</th></tr></tfoot></table></div><div class="datepicker-years" style="display: none;"><table class="table table-condensed"><thead><tr><th class="prev" style="visibility: visible;">«</th><th colspan="5" class="datepicker-switch">2010-2019</th><th class="next" style="visibility: visible;">»</th></tr></thead><tbody><tr><td colspan="7"><span class="year old">2009</span><span class="year">2010</span><span class="year">2011</span><span class="year">2012</span><span class="year">2013</span><span class="year">2014</span><span class="year">2015</span><span class="year">2016</span><span class="year">2017</span><span class="year">2018</span><span class="year">2019</span><span class="year new">2020</span></td></tr></tbody><tfoot><tr><th colspan="7" class="today" style="display: none;">Today</th></tr><tr><th colspan="7" class="clear" style="display: none;">Clear</th></tr></tfoot></table></div></div></div>
              </div>
              <!-- /.card-body -->
            </div>              
          </section>
          <!-- right col -->
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
