(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "calendar-week":       {url:"$H/m/calendar-week.html", Table:"demo-wapp-roster", Table2:"demo-wapp-booking","roster":"roster-form","booking":"booking-form"},
        "calendar-month":       {url:"$H/m/calendar-month.html",Table:"demo-wapp-roster", Table2:"demo-wapp-booking","roster":"roster-form","booking":"booking-form"},
        "calendar-day":       {url:"$H/m/calendar-day.html",Table:"demo-wapp-roster",Table2:"demo-wapp-booking",Table3:"demo-wapp-assign","roster":"roster-form","booking":"booking-form"},
        "calendar-week-ss":       {url:"$H/m/calendar-week.html", Table:"demo-wapp-roster", Table2:"demo-wapp-booking","roster":"roster-form","booking":"booking-form","sleep":"yes"},
        "calendar-month-ss":       {url:"$H/m/calendar-month.html",Table:"demo-wapp-roster", Table2:"demo-wapp-booking","roster":"roster-form","booking":"booking-form","sleep":"yes"},
        "calendar-day-ss":       {url:"$H/m/calendar-day.html",Table:"demo-wapp-roster",Table2:"demo-wapp-booking","roster":"roster-form","booking":"booking-form","sleep":"yes"},
        "roster-form":       {url:"$H/m/roster-form.html",Table:"demo-wapp-roster",lookup:"demo-wapp-staff"},
        "roster-data":       {url:"$H/m/roster-data.html",Table:"demo-wapp-roster",form_module:"roster-form"},
        "staff-data":       {url:"$H/m/staff-data.html",Table:"demo-wapp-staff",form_module:"staff-form"},
        "staff-form":       {url:"$H/m/staff-form.html",Table:"demo-wapp-staff"},
        "position-data":       {url:"$H/m/position-data.html",Table:"demo-wapp-position",form_module:"position-form"},
        "position-form":       {url:"$H/m/position-form.html",Table:"demo-wapp-position"},
        "booking-form":       {url:"$H/m/booking-form.html",Table:"demo-wapp-booking"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
