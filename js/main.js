$(function () {
  console.log('testing');
  $('.date').val(moment().format('MM/DD/YYYY')).datepicker();

  var reps = {
    'Omar Hadi': {
      phone:'(864)630-3002',
      name: 'Omar Hadi ',
      email: 'omar.hadi@medtronic.com'
    },
    'Allison Parshall':{
      phone:'(917)235-3377',
      name: 'Allison Parshall',
      email: 'allison.parshall@medtronic.com'
    },
    'Patricia Sanders': {
      phone:'(818)634-4495',
      name: 'Patricia Sanders',
      email: 'patricia.sanders@medtronic.com'
    }
  }

  var genLetter = function () {
    $('.form-control').each(function(el) {
        var name = $(this).attr('name');
        $('[data-name="' + name + '"]').html($(this).val());
        console.log(name)
    });
    var repName = $('[name="rep-name"]').val();
    $('[data-name="rep-email"]').html(reps[repName]['email']);
    $('[data-name="rep-phone"]').html(reps[repName]['phone']);
    var patientName = $('[name=patient-name]').val();
    var patientFirstName = patientName.split(/\s+/).splice(0,1).join(" ");
    $('[data-name="patient-first-name"]').html(patientFirstName);
    var painScore = Math.round(parseInt($('[name="post-pain"]').val()) / parseInt($('[name="pre-pain"]').val()) * 100);
    $('[data-name="pain-score"]').html(painScore);
    var letter = $('.letter').html();

    var x=window.open();
    x.document.open();
    x.document.write(letter);
    x.document.close();
  }


  $('.btn').on('click', function (e) {
    e.preventDefault();
    genLetter();
    console.log('clicked button');
  });
});
