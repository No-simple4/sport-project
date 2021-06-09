$( document ).ready(function() {
	toggleTeams();

});

function toggleTeams() {
	const $firstTeamButton = $('.js-first-team-button');
	const $secondTeamButton = $('.js-second-team-button');
	const $firstTeam = $('.js-first-team');
	const $secondTeam = $('.js-second-team');

	$firstTeamButton.click(function() {
		$firstTeam.fadeIn(1000);
		$secondTeam.hide();

		$(this).addClass('active');
		$secondTeamButton.removeClass('active');
	});

	$secondTeamButton.click(function() {
		$firstTeam.hide();
		$secondTeam.fadeIn(1000);

		$firstTeamButton.removeClass('active');
		$(this).addClass('active');
	});
}
