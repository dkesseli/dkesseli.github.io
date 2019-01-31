

var main = function() {

var magnificPopup = $.magnificPopup.instance;
//magnificPopup.bgOverlay // transluscent overlay

/*
$.get('wc1.txt', function(data) {
   var content1 = $(data);
}, 'text');

$.get({
    url: "wc1.txt",
    dataType: "text",
    success : function (data) {
        $('.wcontent').html(data);
    }
    });
*/
var activecirc = 0

var content1 = "helllllllo"

var nameList = [
//Bio 1//
"Work Experience",
//Bio 2//
"Education",
//Bio 3//
"Undergraduate Thesis",
//Bio 4//
"Coding Projects",
//Bio 5//
"Skills",
//Bio 6//
"Contact"
]

var bioText = [
//Work Experience//
"<br><span style=\"font-weight:bold; font-size:2vw;\">Engineer I</span> <br>\
 <span style=\"font-weight:lighter\">Brayton Energy, Hampton, NH <br> October 2015 - present</span> <br>\
Worked on a wide variety of engineering research and design projects, including: <br>\
    <ul>\
    <li>Modeled compact heat exchangers using Excel VBAs and solvers.</li>\
    <li>Wrote optimization routines for heat exchanger geometries and gas turbine cycle \            parameters.</li>\
    <li>Worked on several CSP solar receiver projects, which included designing rigs,  \   creating test plans, analyzing data and writing up results.</li>\
    <li>rote and proofread reports that were delivered to government and private\ organizations.</li>\
    <li>Performed extensive research and wrote reports on a wide variety of topics.</li>\
    <li>Was introduced to a wide variety of software including ANSYS Fluent, Solidworks/Flow works, xcos, and visual basic.</li></ul>\
<br>\
<span style=\"font-weight:bold; font-size:2vw;\">Physics Grader</span> <br>\
 <span style=\"font-weight:lighter\">Reed College, Portland, OR<br> 2014 - 2015</span> <br>\
Graded homework for introductory physics classes during the school year.<br><br>\
<span style=\"font-weight:bold; font-size:2vw;\">Summer Intern</span> <br>\
 <span style=\"font-weight:lighter\">Brayton Energy, Hampton, NH <br> Summer 2013 </span> <br>\
Worked on CAD projects, debugging C++ fluid solver code, material research, and project \feasibility and design studies.",
//Education//
"<span style=\"font-weight:bold; font-size:2vw;\">Reed College</span> <br>\
 <span style=\"font-weight:lighter\">Portland, OR<br>Bachelor of Physics 2011 - 2015</span> <br>\
Relevant Classes Include: \
<ul>\
<li><span style=\"font-weight:bold;\">Physics: </span>Classical Mechanics, Nonlinear Dynamics, E&M I & II, Scientific Computation, Quantum Mechanics, Thermal, Advanced Laboratory I & II.\
<li><span style=\"font-weight:bold;\">Math: </span>Computer Science I & II, Multivariable Calculus I & II, Intro to Analysis. \
<li><span style=\"font-weight:bold;\">Other: </span>Literature: Short Story, Literature: Post-War British Novels, Creative Writing\
</ul>",
//Undergrad Thesis//
"<span style=\"font-weight:lighter\">Title: </span><span style=\"font-weight:bold;\">Modeling Kolmogorov Flow Experimentally and Numerically</span> <br>\
 <span style=\"font-weight:lighter\">Advisor: </span> Professor Daniel Borrero <br>\
<span style=\"font-weight:lighter\">Description: </span> Experimentally modeled 2-dimensional fluid flows using a thin fluid layer,and tracked the flow using PIV. Wrote a time-dependent flow-solver code in Mathematica, and compared this to my experimental results. <center><span style=\"font-weight:bold\">Click the gear for a full PDF!</span> <br><br>\
<img src=\"Figs/thesisexp.gif\" style=\"float: left; width:20em;height:20em;\"> \
<img src=\"Figs/thesisCFD.gif\" style=\"float: right; width:20em;height:20em;\"> \
<p style=\"float: left\">Experimental Data</p>\
<p style=\"float: right\">Simulated Data (vorticity plot)</p>\
</center>",
//Coding Projects//
"<br><span style=\"font-weight:bold; font-size:2vw;\">Coding Proficiencies</span> <br>\
    <ul>\
    <li><span style=\"font-weight:bold;\">Basic: </span>Java, C++, haskell, Matlab, LabVIEW, SQL</li>\
    <li><span style=\"font-weight:bold;\">Intermediate: </span>javascript, LaTeX, Solidworks, visual basic, Adobe Illustrator, Adobe Photoshop</li>\
    <li><span style=\"font-weight:bold;\">Advanced: </span>Mathematica, Python, Microsoft Office</li></ul>\
    <br>\<span style=\"font-weight:bold; font-size:2vw;\">Python Projects</span> <br>I built a game in Python, and am in the process of creating another. These games are made from scratch and use a wide variety of Python features including class inheritance, imports, reading and writing to text files, and a keyboard controlled user interface built in tkinter.\
<br><br>\<span style=\"font-weight:bold; font-size:2vw;\">Web Projects</span> <br>Currently working on CSS/HTML/Javascript! I've used these skills to make this website and others from scratch, incorporating and modifying open-source pieces of code and features.  I'm in the process of building a javascript-based game as a side project.",
//Interests/
"I'm very interested in creative writing and fiction.  Click the circle for a story about fish.  I'm also interested in writing and drawing comics, on paper and computer.\
<br><br>\<span style=\"font-weight:bold; font-size:2vw;\">Other interests include: </span>\
<ul>\
    <li> Ultimate Frisbee\
    <li> Drawing and design\
    <li> Climbing, backpacking, general outdoor romping\
    <li> Game design\
    <li> Bees!\
    </ul> ",
//Contact//
"Feel free to contact me by email at devon.kesseli@gmail.com.  I can also be reached through LinkedIn, Facebook, or by yelling very loudly into your computer screen."
]


$("#circ1").on('mouseenter', function(e) {
    if (activecirc == 0) {
    $('.writerName').html(nameList[0]);
    $('.writerBio').html(bioText[0]);
    $('#hovpanel').toggleClass('hovered');}
    if (activecirc != 1) {
    $('#hovpanel').toggleClass('hovered');
    if (activecirc == 2) {
        $('#circ2').toggleClass('hovered');
    } else if (activecirc == 3) {
        $('#circ3').toggleClass('hovered');
    } else if (activecirc == 4) {
        $('#circ4').toggleClass('hovered');
    } else if (activecirc == 5) {
        $('#circ5').toggleClass('hovered');
    } else if (activecirc == 6) {
        $('#circ6').toggleClass('hovered');
    };
    $('#circ1').toggleClass('hovered');
    activecirc = 1;
    setTimeout(function(){
    $('.writerName').html(nameList[0]);
    $('.writerBio').html(bioText[0]);
    $('#hovpanel').toggleClass('hovered');
    }, 800);
    }
})


$("#circ2").on('mouseenter', function(e) {
    if (activecirc == 0) {
    $('.writerName').html(nameList[1]);
    $('.writerBio').html(bioText[1]);
    $('#hovpanel').toggleClass('hovered'); }
    if (activecirc != 2) {
    $('#hovpanel').toggleClass('hovered');
    if (activecirc == 1) {
        $('#circ1').toggleClass('hovered');
    } else if (activecirc == 3) {
        $('#circ3').toggleClass('hovered');
    } else if (activecirc == 4) {
        $('#circ4').toggleClass('hovered');
    } else if (activecirc == 5) {
        $('#circ5').toggleClass('hovered');
    } else if (activecirc == 6) {
        $('#circ6').toggleClass('hovered');
    };
    $('#circ2').toggleClass('hovered');
    setTimeout(function(){
    $('.writerName').html(nameList[1]);
    $('.writerBio').html(bioText[1]);
    $('#hovpanel').toggleClass('hovered');
    }, 800);
    activecirc = 2;
    }
})


$("#circ3").on('mouseenter', function(e) {
    if (activecirc == 0) {
    $('.writerName').html(nameList[2]);
    $('.writerBio').html(bioText[2]);
    $('#hovpanel').toggleClass('hovered'); }
    if (activecirc != 3) {
    $('#hovpanel').toggleClass('hovered');
    if (activecirc == 2) {
        $('#circ2').toggleClass('hovered');
    } else if (activecirc == 1) {
        $('#circ1').toggleClass('hovered');
    } else if (activecirc == 4) {
        $('#circ4').toggleClass('hovered');
    } else if (activecirc == 5) {
        $('#circ5').toggleClass('hovered');
    } else if (activecirc == 6) {
        $('#circ6').toggleClass('hovered');
    };
    $('#circ3').toggleClass('hovered');
    setTimeout(function(){
    $('.writerName').html(nameList[2]);
    $('.writerBio').html(bioText[2]);
    $('#hovpanel').toggleClass('hovered');
    }, 800);
    activecirc = 3;
    }

})


$("#circ4").on('mouseenter', function(e) {
    if (activecirc == 0) {
    $('.writerName').html(nameList[3]);
    $('.writerBio').html(bioText[3]);
    $('#hovpanel').toggleClass('hovered'); }
    if (activecirc != 4) {
    $('#hovpanel').toggleClass('hovered');
    if (activecirc == 1) {
        $('#circ1').toggleClass('hovered');
    } else if (activecirc == 2) {
        $('#circ2').toggleClass('hovered');
    } else if (activecirc == 3) {
        $('#circ3').toggleClass('hovered');
    } else if (activecirc == 5) {
        $('#circ5').toggleClass('hovered');
    } else if (activecirc == 6) {
        $('#circ6').toggleClass('hovered');
    };
    $('#circ4').toggleClass('hovered');
    setTimeout(function(){
    $('.writerName').html(nameList[3]);
    $('.writerBio').html(bioText[3]);
    $('#hovpanel').toggleClass('hovered');
    }, 800);
    activecirc = 4;
    }
})


$("#circ5").on('mouseenter', function(e) {
    if (activecirc == 0) {
    $('.writerName').html(nameList[4]);
    $('.writerBio').html(bioText[4]);
    $('#hovpanel').toggleClass('hovered'); }
    if (activecirc != 5) {
    $('#hovpanel').toggleClass('hovered');
    if (activecirc == 1) {
        $('#circ1').toggleClass('hovered');
    } else if (activecirc == 2) {
        $('#circ2').toggleClass('hovered');
    } else if (activecirc == 3) {
        $('#circ3').toggleClass('hovered');
    } else if (activecirc == 4) {
        $('#circ4').toggleClass('hovered');
    } else if (activecirc == 6) {
        $('#circ6').toggleClass('hovered');
    };
    $('#circ5').toggleClass('hovered');
    setTimeout(function(){
    $('.writerName').html(nameList[4]);
    $('.writerBio').html(bioText[4]);
    $('#hovpanel').toggleClass('hovered');
    }, 800);
    activecirc = 5;
    }
})


$("#circ6").on('mouseenter', function(e) {
    if (activecirc == 0) {
    $('.writerName').html(nameList[5]);
    $('.writerBio').html(bioText[5]);
    $('#hovpanel').toggleClass('hovered'); }
    if (activecirc != 6) {
    $('#hovpanel').toggleClass('hovered');
    if (activecirc == 1) {
        $('#circ1').toggleClass('hovered');
    } else if (activecirc == 2) {
        $('#circ2').toggleClass('hovered');
    } else if (activecirc == 3) {
        $('#circ3').toggleClass('hovered');
    } else if (activecirc == 4) {
        $('#circ4').toggleClass('hovered');
    } else if (activecirc == 5) {
        $('#circ5').toggleClass('hovered');
    };
    $('#circ6').toggleClass('hovered');
    setTimeout(function(){
    $('.writerName').html(nameList[5]);
    $('.writerBio').html(bioText[5]);
    $('#hovpanel').toggleClass('hovered');
    }, 800);
    activecirc = 6;
    }
})
/*
$('#circ1').magnificPopup({
    items: [
      {src: 'Content/GMcgreat/GM1.jpg'},
      {src: 'Content/GMcgreat/GM2.jpg'},
      {src: 'Content/GMcgreat/GM3.jpg'}
    ],
    gallery: {
      enabled: true
    },
    type: 'image' , // this is a default type
    cursor: 'mfp-zoom-out-cur',
    image:{
    verticalFit: false // Fits image in area vertically
    }
});
*/
/*
$('#circ2').magnificPopup({
    items: [
      {src: 'Content/PChinchill/PC1.jpg'}
    ],
    gallery: {
      enabled: true
    },
    type: 'image' , // this is a default type
    cursor: 'mfp-zoom-out-cur',
    image:{
    verticalFit: false // Fits image in area vertically
    }
});
*/

/*
$('#circ2').magnificPopup({
  items: {
      src: "#test-popup",
      type: 'inline'
  }
});
*/
/*
$('#circ3').magnificPopup({
    items: [
      {src: 'Content/OEggplonk/OE1.jpg'},
      {src: 'Content/OEggplonk/OE2.png'}
    ],
    gallery: {
      enabled: true
    },
    type: 'image' , // this is a default type
    image:{
    verticalFit: false // Fits image in area vertically
    }
});
*/
/*
$('#circ4').magnificPopup({
    items: [
      {src: 'Content/Steve/S1.jpg'}
    ],
    gallery: {
      enabled: true
    },
    type: 'image' , // this is a default type
    image:{
    verticalFit: false // Fits image in area vertically
    }
});
*/
/*
$('#circ5').magnificPopup({
    items: [
      {src: 'Content/DKesseli/milk1.jpg'},
      {src: 'Content/DKesseli/milk2.jpg'},
      {src: 'Content/DKesseli/milk3.jpg'},
    ],
    gallery: {
      enabled: true
    },
    type: 'image' , // this is a default type
    cursor: 'mfp-zoom-out-cur',
    image:{
    verticalFit: false // Fits image in area vertically
    }
});
*/
/*
$('#circ6').magnificPopup({
    items: [
      {src: 'Content/SVanderbright/SV1.jpg'}
    ],
    gallery: {
      enabled: true
    },
    type: 'image' , // this is a default type
    cursor: 'mfp-zoom-out-cur',
    image:{
    verticalFit: false // Fits image in area vertically
    }
});
*/
document.getElementById("demo").onclick = function() {myFunction()};



function myFunction() {
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
    document.body.style.background = 'green';
    document.getElementById("circ1").classList.add("tcircle");
    //element.circle.style.background-image = "Figs/Jelly1.jpg";

}

$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});


// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
//$('.dropdown').on('show.bs.dropdown', function(e){
 //   $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
//});

// ADD SLIDEUP ANIMATION TO DROPDOWN //
//$('.dropdown').on('hide.bs.dropdown', function(e){
//    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
//});



};

$(document).ready(main);

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
