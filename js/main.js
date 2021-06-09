$( document ).ready(function() {
	toggleTeams();
});

function toggleTeams() {
	const $firstTeamButton = $('.js-first-team-button');
	const $secondTeamButton = $('.js-second-team-button');
	const $firstTeam = $('.js-first-team');
	const $secondTeam = $('.js-second-team');

	$firstTeamButton.click(function() {
		$firstTeam.show();
		$secondTeam.hide();

		$(this).addClass('active');
		$secondTeamButton.removeClass('active');
	});

	$secondTeamButton.click(function() {
		$firstTeam.hide();
		$secondTeam.show();

		$firstTeamButton.removeClass('active');
		$(this).addClass('active');
	});
}
