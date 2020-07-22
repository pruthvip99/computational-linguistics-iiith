function displayWords(val)
{
  var sentence=" ";
  if (val=='english') 
  {
    sentence=selectEnglishSentences();
  }
  else if(val=='hindi')
  {
    sentence=selectSentencesHindi();
  }
     //sentence="John ate an apple before afternoon";
    var words=sentence.split(" ");
    var arr=shuffle(words);
    var table = document.getElementById("sentences");
    if(table.rows.length==1)
    {
      table.deleteRow(0);
    }
    var row =table.insertRow(0);
      for(var i=0;i<arr.length;i++)
        {
          var nam=arr[i];      
          var cell1 = row.insertCell(0);                  
          cell1.innerHTML = "<input type = 'button' id='"+i+"' value = '"+nam+"' onClick = 'displaytheText(this)' >";   
        }   
}

function selectEnglishSentences()
{
  var engSentence = ["I told her that I bought a book yesterday","the teacher returned the book after she noticed the error","John ate an apple so did she","John ate an apple before afternoon", "some students like to study in the night", "John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies"];
  var ar =shuffle(engSentence);
  return ar[0];

}
function selectSentencesHindi()
{
  var hiSentence = ["राम और श्याम बाजार गयें", "राम सोया और श्याम भी", "मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"];
  var arrHi =shuffle(hiSentence);
  return arrHi[0];
}
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
  }
function displaytheText(field)
  {
    field.style.display = 'none';
    var thirdRow;
    var table = document.getElementById("sentences");
    if(table.rows.length==1)
    {
     var secRow= table.insertRow(1);
     var messg=secRow.insertCell(0);
     messg.innerHTML="<p id='test'>Form a sentence (Declarative or Interrogative or any other type) from the given words</p>";
    }
    if(table.rows.length>=4)
    {
      thirdRow =table.rows.item(2);
      var rowLen= thirdRow.cells.length;
      var exCell=thirdRow.insertCell(rowLen);
      exCell.innerHTML=field.value;
      checkComplete(table,thirdRow);
    }
    else{
      thirdRow= table.insertRow(2);
     var cell1 = thirdRow.insertCell(0);                  
     cell1.innerHTML =field.value ; 
     //add reform sentence button
      var fourthRow=table.insertRow(3);
      var fCell=fourthRow.insertCell(0);
      fCell.innerHTML='<input type="button" name="reForm" id="reForm" value="Re-form Sentence" onClick="reformSentence()" >';
      checkComplete(table,thirdRow);
 
    }  
 }

 function reformSentence()
 {
  table=document.getElementById("sentences");
  table.deleteRow(3);
  table.deleteRow(2);
  var wordRow=table.rows.item(0);
  var buttonWord;
  for(var i=0 ;i<table.rows[0].cells.length;i++)
  {
    buttonWord= document.getElementById(i);
    buttonWord.style.display="";
    
  }
 }

 
 
 function checkComplete(tab,tabRow)
 {
  if(tab.rows.length>=1)
  {
      if(tab.rows[0].cells.length==tabRow.cells.length)
      {
        var fivRow=tab.insertRow(4);
        var fivCol=fivRow.insertCell(0);
        fivCol.innerHTML="<input type='button' id='correct' name='correct'value='Check the Correctness of Sentence' onchange='checkCorrect()'>";
      }
  }
 }

 function compareArray(array1,array2)
 {
	 if(array1.length === array2.length && array1.sort().every(function(value, index) { return value === array2.sort()[index]})
		 {
			 return true;
		 }
		 else
		 {
			 return false;
		 }
	 
)
 }
 
 function checkCorrect()//added check correctness of the sentence
 {
	table=document.getElementById("sentences");
	var SelectedSentence='';
	//get button 
	
    //get Array value
    var len=table.rows[2].cells.length
    for(var k=0; k<len;k++)
    {
      SelectedSentence=SelectedSentence+table.rows[2].cells.item(i).innerHTML+" ";
    }
 
var x=test2(SelectedSentence.trim());

	compareSentences(x)
	
  var sixRow=tab.insertRow(5);
  var ansCol= sixRow.insertCell(0);
  
  
  if(compareSentences(x)=='true')
  {
    ansCol.innerHTML="Correct Answer !";

  }
  else{
  ansCol.innerHTML="Wrong Answer !";
  }

  var sevRow=tab.insertRow(6);
  var showCol=  sevRow=tab.insertCell(0);
  
  showCol.innerHTML="<input type=''button id='showAnswer' value='Get Answers' onChange='showAnswer(this)' > ";


 }
 
 
 function test2(sentence)
        {
          var index=999;
            var engSentence =getSentenceArray(); ["I told her that I bought a book yesterday","the teacher returned the book after she noticed the error","John ate an apple so did she","John ate an apple before afternoon", "some students like to study in the night", "John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies"];
            var words2=sentence.split("");

            for(i=0;i<engSentence.length;i++)
            {
            var testSen=engSentence[i];
            var words1=testSen.split(" ");
            
                if(compareArray(words1,words2))
				{
					index=i;
					return i;
				}
            }
			
			return i
        }
		
function getSentenceArray()
{
	let lang=document.getElementById("language").value
	var testArr;
	if("english"==lang)
	{
		testArr= ["I told her that I bought a book yesterday","the teacher returned the book after she noticed the error","John ate an apple so did she","John ate an apple before afternoon", "some students like to study in the night", "John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies"];

	}
	else if("hindi"==lang)
	{
		testArr = ["राम और श्याम बाजार गयें", "राम सोया और श्याम भी", "मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"];

	}
	return testArr;

}


 showAnswer(field)
 {
    if(field.value=='Get Answers')
    {
      field.value='Hide Answers';
    }
    else if(field.val=='Hide Answers')
    {
      field.value='Get Answers';

    }
	 table=document.getElementById("sentences");
	//get Array value
     len=table.rows[2].cells.length
    for( k=0; k<len;k++)
    {
      SelectedSentence=SelectedSentence+table.rows[2].cells.item(i).innerHTML+" ";
    }
 
var y=test2(SelectedSentence.trim());

	var yMap=createMap(document.getElementById("language").value)
	 var checkArr=yMap.get(y.toString());
   var etRow=table.insertRow(7);
   for(i=0;i<checkArr.lenght;i++){
    
    var lastCol= etRow.insertCell(i);
    lastCol.innerHTML="<p>"+checkArr[i]+"</p>";
   }

 }

function createMap(language)
{	
let contacts = new Map()
if("english"==language){
	
contacts.set("0", ["John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"]);
contacts.set('1', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('2', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('3', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('4', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('5', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('6', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('7', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('8', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('9', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
 return contacts;
}
else if("hindi"==language)
{
	contacts.set("0", ["John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"]);
contacts.set('1', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('2', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('3', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('4', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('5', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('6', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('7', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('8', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
contacts.set('9', {"John ate an apple before afternoon","John ate an apple before afternoon","John ate an apple before afternoon"});//set rest of combinations
 return contacts;
}
}


compareSentences(x,sentence)
{
	let xFlag='false';
	let senMap=createMap();
	let subArray=senMap.get(x.toString());
	
	for (let z=0;z<subArray.lenght;z++)
	{
		if(sentence.trim()==subArray[z])
		{
			xFlag='true';
			return xFlag;
		}
	}
	return xFlag;
}



