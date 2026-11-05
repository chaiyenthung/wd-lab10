/* function validate()will validate form data */
function validate() {
	var sid = $("#sid").val();
	var pwd1 = $("#pwd1").val();
	var pwd2 = $("#pwd2").val();
	var uname = $("#uname").val();
	var genm = $("#genm").prop("checked");
	var genf = $("#genf").prop("checked");

	var errMsg = "";								/* create variable to store the error message */
	var result = true;								/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;					/* regular expression for letters and spaces only */

	/* Rule 1, check if all required date are entered */
		if (sid == "") {
		errMsg += "<li>User ID cannot be empty.</li>";
	}
	if (pwd1 == "") {
		errMsg += "<li>Password cannot be empty.</li>";
	}
	if (pwd2 == "") {
		errMsg += "<li>Retype password cannot be empty.</li>";
	}
	if (uname == "") {
		errMsg += "<li>User name cannot be empty.</li>";
	}
	if ((!genm) && (!genf)) {
		errMsg += "<li>A gender must be selected.</li>";
	}
	
	/* Rule 2: Check if User ID contains '@' and does not start with '@' */
	if (sid.indexOf('@') == 0) {
		errMsg += "<li>User ID cannot start with an @ symbol.</li>";
	}
	if (sid.indexOf('@') < 0) {
		errMsg += "<li>User ID must contain an @ symbol.</li>";
	}
	
	/* Rule 3: Check if password and retype password match */
	if (pwd1 != pwd2) {
		errMsg += "<li>Passwords do not match.</li>";
	}
	
	/* Rule 4: Check if user name contains only letters and spaces */
	if (!uname.match(pattern)) {
		errMsg += "<li>User name contains symbols.</li>";
	}

	if (errMsg != "") {
			errMsg = "<div id='scrnOverlay'></div>"
				+ "<section id='errWin' class='window'><ul>"
				+ errMsg
				+ "</ul><div class='buttonrow'><a href='#' id='errBtn' class='button'>Close</a></div></section>";

			var numOfItems = ((errMsg.match(/<li>/g)).length) + 6;

			$("body").after(errMsg);
			$("#scrnOverlay").css('visibility', 'visible');
			$("#errWin").css('height', numOfItems.toString() + 'em');
			$("#errWin").css('margin-top', (numOfItems / -2).toString() + 'em');
			$("#errWin").show();

			$("#errBtn").click(function () {
				$("#scrnOverlay").remove();
				$("#errWin").remove();
			});

			result = false;
		} 

		return result;
	}

function toggle() {
	$(this).parent().next().slideToggle();
	if ($(this).html() == "[-]") {
		$(this).html("[+]");
	} else {
		$(this).html("[-]");
	}
}

/* link HTML elements to corresponding event function */
function init () {
	$(".collapse").click(toggle);	

	/* link function validate() to the onsubmit event of the form */
	$("#regform").submit(validate);	
}

/* execute function init() once the window is loaded*/
$(document).ready(init);