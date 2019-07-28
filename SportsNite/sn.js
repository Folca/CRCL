var matchup = {
    team1: 'Team 1', // Name of Team 1
    team2: 'Team 2', // Name of Team 2
    type: 'Type 1', // Type of bet (over/under, W/L, prop-bet, etc.)
    odds1: '+1.5', // for things like O/U
    odds2: '-1.5', // for things like O/U
    payout1: '+$100', // payout for Team 1 win
    payout2: '+$200', // payout for Team 2 win
}

// Set Teams, Odds, and Type on page load
$(document).ready(function() {
    $('.single-game').each(function() {
        $(this).find(':first').find(':first').find(':first').text(matchup.team1+' @');
        $(this).find(':first').find(':first').find(':nth-child(2)').text(matchup.team2);
        $(this).find('div:nth-child(3)').find('div:first').find('p:first').text(matchup.payout1)
        $(this).find('div:nth-child(3)').find('div:nth-child(2)').find('p:first').text(matchup.payout2)
        $(this).find('#wager-inner').find('div:nth-child(2)').find('div:first').find('p').text(matchup.team1+': '+matchup.odds1)
        $(this).find('#wager-inner').find('div:nth-child(2)').find('div:nth-child(2)').find('p').text(matchup.payout1)
        $(this).find('#wager-inner').find('div:nth-child(3)').find('div:first').find('p').text(matchup.team2+': '+matchup.odds2)
        $(this).find('#wager-inner').find('div:nth-child(3)').find('div:nth-child(2)').find('p').text(matchup.payout2)
    })
})

// Toggle the login pop-up
$(function() {
    $('#login-button').click(function(e) {
        if($('.login-form').hasClass('invisible')) {
            $(".login-form").delay(100).slideDown(500);
            $('.login-form').removeClass('invisible')
        } else {
            $(".login-form").delay(100).slideUp(500);
            setTimeout(function() {
                $('.login-form').addClass('invisible')
            }, 500)
        }

    })
})

// Login pop-up functionality
$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

// Change to weekly leaderboard
$(function() {
    $('#money').click(function(e) {
        $('#money').addClass('active');
        $('#moneyList').removeClass('invisible');
        $('#points').removeClass('active');
        $('#pointList').addClass('invisible');
    })
})

// Change to overall leaderboard
$(function() {
    $('#points').click(function(e) {
        $('#points').addClass('active');
        $('#pointList').removeClass('invisible');
        $('#money').removeClass('active');
        $('#moneyList').addClass('invisible');
    })
})

// Make buttons bold when hovering
$(function() {
    $('.teamButtons').hover(function() {
        $(this).addClass('hover');
    })
})

// Make buttons normal after hovering
$(function() {
    $('.teamButtons').mouseleave(function() {
        $(this).removeClass('hover');
    })
})

// Open Wager pop-up
$(function() {
    $('.teamButtons').click(function() {
        if($('.wager-form').hasClass('invisible')) {
            $(".wager-form").delay(100).fadeIn(250);
            $('.wager-form').removeClass('invisible');
        } else {
            $(".wager-form").delay(100).delay(100).fadeOut(250);
            setTimeout(function() {
                $('.wager-form').addClass('invisible')
            }, 500)
        }
    })
})

// Change Payout with Input
$(function() {
    $('.wager-amt').keyup(function() {
        var bet = Number(this.value)
        if(!isNaN(bet)) {
            var parent = $(this).parent()
            var output = $(parent).next().find('p:first')
            var multiplier = $(parent).prev().find('p:first') //.text()
            var mult = Number($(multiplier).text().substring(2))/100
            var payout = '$'+(bet*mult+bet).toString()
            $(output).text(payout)
        }
    })
})

// Cancel wager form
$(function() {
    $('.wager-cancel').click(function() {
        $(".wager-form").delay(100).fadeOut(250);
            setTimeout(function() {
                $('.wager-form').addClass('invisible')
            }, 250)
    })
})

// Submit wager form
// $(function() {
//     $('.wager-submit').click(function() {
//         var newBet = 
//     })
// })

// Cancel submitted wager
$(function() {
    $('.cancel-wager').click(function() {
        const wager = $(this).parent().parent();
        wager.remove();
        // console.log(wager)
    })
})

// Close login form
$(function() {
    $('.exit-button').click(function() {
        $(".login-form").delay(100).slideUp(250);
        setTimeout(function() {
            $('.login-form').addClass('invisible')
        }, 500)
    })
})