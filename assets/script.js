let btn = $(".saveBtn");

$("#currentDay").text(moment().format("hh:mm ddd, MMM do YYYY"));

function highlight() {
  let hour = moment().hours();
  $(".time-block").each(function () {
    let hourNow = parseInt($(this).attr("id"));
    if (hourNow < hour) {
      $(this).addClass("past");
    } else if (hourNow === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

function tsk() {
  $(".hour").each(function () {
    let hour = $(this).text();
    let desc = localStorage.getItem(hour);
    if (desc !== null) {
      $(this).siblings(".description").val(desc);
    }
  });

  btn.on("click", function () {
    let hour = $(this).siblings(".hour").text();
    let desc = $(this).siblings(".description").val();
    localStorage.setItem(hour, desc);
  });
}
tsk();
highlight();
