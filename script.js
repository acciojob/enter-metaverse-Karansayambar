//your JS code here. If required.
const para = document.getElementById("status");

function buttonClick(){
	const head = document.createElement("h1");
	para.innerText="Enter the Metaverse";
	head.innerText = para.innerText;
	para.parentNode.replaceChild(head,para);
}