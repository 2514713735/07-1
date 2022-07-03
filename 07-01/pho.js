$(function(){
    tb()
    $.ajax({
		url : 'http://kaoshi/index.php',
		type : 'get',
		dataType : 'json',
		success : function (res) {
		    $('.lj-h4').html(res.member_count)
            $('.fw-h4').html(res.member_view_count)
            $('.ff-h4').html(res.order_pay_member_count)
            $('.ls-h4').html(res.un_view_scale)
		
		}
	 })

    
})
    function tb(){
        $.ajax({
            url : 'http://kaoshi/tb.php',
            type : 'get',
            dataType : 'json',
            success : function (res) {
             for (var i in res) {
                    // var s = res[i].member_count
                    //var ss = res[i].member_view_count
                  // //   var sss = res[i+1].member_count
                  // //   var ssss = res[i+1].member_view_count
                   
                    // console.log(s);
                    var myChart = echarts.init(document.getElementById('box2-2'));
                    option = {
                      legend: {
                        orient: 'vertical',
                        right: 400,
                        top: 'auto'
                      },
                      grid: {
                        width: "auto"
                      },
                 tooltip: {},
                 dataset: {
                   // 提供一份数据。
                   source: [
                    ['product', '新增会员数', '新增访客数'],
                     ['2022-06-01', 0, 1],
                     ['2022-06-02',0, 1],
                     ['2022-06-03', 1, 5],
                     ['2022-06-04', 1, 5],
                     ['2022-06-05', 0, 1],
                     ['2022-06-06', 0, 1],
                     ['2022-06-07', 1, 2],
                     ['2022-06-08', 0, 2],
                     ['2022-06-09', 3, 7],
                     ['2022-06-10', 1, 3],
                     ['2022-06-11', 0, 2],
                     ['2022-06-12',2, 4],
                     ['2022-06-13', 0, 1],
                     ['2022-06-14', 1, 5],
                     ['2022-06-15', 0, 5],
                     ['2022-06-16', 2, 5],
                     ['2022-06-17', 1, 5],
                     ['2022-06-18', 1, 11],
                     ['2022-06-19', 0, 4],
                     ['2022-06-20', 0, 1],
                     ['2022-06-21', 0, 1],
                     ['2022-06-22',1, 7],
                     ['2022-06-23', 0, 4],
                     ['2022-06-24', 0, 7],
                     ['2022-06-25', 0, 5],
                     ['2022-06-26', 0, 2],
                     ['2022-06-27', 0, 4],
                     ['2022-06-28', 0, 2],
                     ['2022-06-29', 0, 2],
                     ['2022-06-30', 1, 1],
                    
                   ]
                 },
                 // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
                 xAxis: {
                   type: 'category',
                   boundaryGap: false,
                 },
                 // 声明一个 Y 轴，数值轴。
                 yAxis: {},
                 // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
                 series: [{ type: 'line',emphasis: {
                       focus: 'series' }},
                          { type: 'line',emphasis: {
                       focus: 'series' }},
                          { type: 'line',emphasis: {
                       focus: 'series' }},
                          { type: 'line',emphasis: {
                       focus: 'series' }},
                          { type: 'line',emphasis: {
                       focus: 'series' }},
                         
                     ]
               };
               myChart.setOption(option);
                }
                
               
        }
         })
    
    }
