// Code taken from the raphaeljs.com site and scaled up for comparison

(function () {
	var logoPaths = [
		"M49.973,94.128c-5.212,0-10.113-2.029-13.799-5.717l-24.75-24.75c-3.69-3.685-5.723-8.587-5.723-13.802c0-5.216,2.033-10.119,5.724-13.806l24.75-24.749c3.686-3.687,8.585-5.715,13.798-5.715c5.212,0,10.113,2.028,13.8,5.714l24.749,24.752c3.69,3.683,5.725,8.586,5.725,13.803c0,5.217-2.034,10.119-5.726,13.805L63.772,88.411C60.086,92.099,55.185,94.128,49.973,94.128L49.973,94.128z",
		"M33.014,23.398c0-9.366,7.593-16.959,16.959-16.959c9.367,0,16.959,7.593,16.959,16.959c0,9.367-7.592,16.959-16.959,16.959C40.606,40.358,33.014,32.765,33.014,23.398",
		"M93.816,61.314c2.23-3.371,3.43-7.32,3.43-11.455c0-5.571-2.172-10.806-6.112-14.738L64.707,8.691l-0.01,0.01c-3.771-3.777-8.979-6.117-14.725-6.117S39.019,4.925,35.249,8.702L35.24,8.692L8.813,35.118c-3.941,3.937-6.112,9.172-6.112,14.741c0,5.568,2.17,10.803,6.11,14.737l23.829,23.829c0.955,1.072,1.959,2.075,3.017,2.997c3.885,3.681,8.943,5.705,14.315,5.705c5.565,0,10.799-2.167,14.734-6.104l25.71-25.709c0.065-0.064,0.13-0.13,0.195-0.195l0.521-0.52c0.993-0.991,1.873-2.066,2.635-3.207c0.018-0.025,0.037-0.049,0.056-0.074L93.816,61.314zM89.535,49.859c0,2.592-0.752,5.066-2.144,7.184c-0.835,1.14-1.706,2.136-2.604,2.997l-0.064,0.064c-4.227,4.021-9.003,5.16-13.056,5.16c-2.23,0-4.243-0.346-5.825-0.745c-9.263-2.34-19.332-10.311-23.94-21.936c2.483,1.049,5.21,1.629,8.07,1.629c10.747,0,19.616-8.187,20.702-18.65l15.009,15.008C88.167,43.053,89.535,46.351,89.535,49.859zM49.973,10.294c7.227,0,13.104,5.879,13.104,13.104c0,7.226-5.878,13.105-13.104,13.105c-7.225,0-13.103-5.879-13.103-13.105C36.87,16.173,42.748,10.294,49.973,10.294zM14.262,59.146c-2.483-2.481-3.851-5.779-3.851-9.286c0-3.508,1.367-6.806,3.85-9.286l10.154-10.155c-2.65,9.022-3.788,18.516-3.178,27.617c0.219,3.271,0.671,6.409,1.321,9.404L14.262,59.146zM31.621,33.206c2.23,17.449,16.042,34.672,32.333,38.789c2.654,0.67,5.256,1,7.773,1c0.036,0,0.073-0.003,0.109-0.003l-12.58,12.581c-2.481,2.479-5.778,3.845-9.284,3.845c-2.441,0-4.773-0.676-6.805-1.914l0.004-0.007c-0.8-0.53-1.562-1.129-2.303-1.763c-0.058-0.057-0.12-0.104-0.177-0.161l-2.542-2.542c-5.227-6.001-8.514-14.93-9.221-25.51C28.393,49.515,29.354,41.167,31.621,33.206"
	];
	var logo = Raphael('logo-js', 400, 400);
	logo.path(logoPaths[0]).attr({
		fill: "#f89938",
		stroke: "none"
	}).scale(4, 4, 0, 0);
	logo.path(logoPaths[1]).attr({
		fill: "#39f",
		stroke: "none"
	}).scale(4, 4, 0, 0);
	logo.path(logoPaths[2]).attr({
		fill: "#333",
		stroke: "none"
	}).scale(4, 4, 0, 0);
})();
