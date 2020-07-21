function displayWords(val)//displaying the word function is added here
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
}//language selection dropdown

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

 function checkCorrect()
 {
  table=document.getElementById("sentences");
var SelectedSentence='';
    //get Array value
    var len=table.rows[2].cells.length
    for(var k=0; k<len;k++)
    {
      SelectedSentence=SelectedSentence+table.rows[2].cells.item(i).innerHTML+" ";
    }
    alert(SelectedSentence)
//////
  var sixRow=tab.insertRow(5);
  var ansCol= sixRow.insertCell(0);
  if(compareArray(SelectedSentence)=='true')
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
    var etRow=tab.insertRow(7);
    var lastCol= etRow.insertCell(0);
    lastCol.innerHTML="<p > </p>";

 }

function compareArray(sen)
{
  var text = '{"sentence":[' +
  '{"combination":"John ate an apple before afternoon	" ,"value":"01"},' +
  '{"combination":"before afternoon John ate an apple	","value":"01" },' +
  '{"combination":"John before afternoon ate an apple " ,"value":"01"},' +
  '{"combination":"some students like to study in the night","value":"02" },' +
  '{"combination":"at night some students like to study","value":"02" },' +
  '{"combination":"John and Mary went to church" ,"value":"02" },' +
  '{"combination":"Mary and John went to church","value":"02"  },' +
  '{"combination":"John went to church after eating","value":"02"  },' +
  '{"combination":"after eating John went to church","value":"02"  },' +
  '{"combination":"John after eating went to church","value":"02"  },' +
  '{"combination":"did he go to market" ,"value":"02" },' +
  '{"combination":"he did go to market" ,"value":"02" },' +
  '{"combination":"the woman who called my sister sells cosmetics" ,"value":"02" },' +
  '{"combination":"the woman who sells cosmetics called my sister","value":"02" },' +
  '{"combination":"my sister who sells cosmetics called the woman" ,"value":"02" },' +
  '{"combination":"my sister who called the woman sells cosmetics" ,"value":"02" },' +
  '{"combination":"John goes to the library and studies" ,"value":"02" },' +
  '{"combination":"John studies and goes to the library","value":"02"  },' +
  '{"combination":"John ate an apple so did she","value":"02"  },' +
  '{"combination":"she ate an apple so did John" ,"value":"02" },' +
  '{"combination":"he teacher returned the book after she noticed the error","value":"02"  },' +
  '{"combination":"the teacher noticed the error after she returned the book","value":"02"  },' +
  '{"combination":"after the teacher returned the book she noticed the error","value":"02"  },' +
  '{"combination":"after the teacher noticed the error she returned the book","value":"02"  },' +
  '{"combination":"she returned the book after the teacher noticed the error","value":"02"  },' +
  '{"combination":"she noticed the error after the teacher returned the book,"value":"02"  },' +
  '{"combination":"after she returned the book the teacher noticed the error","value":"02"  },' +
  '{"combination":"after she noticed the error the teacher returned the book ,"value":"02" },' +
  '{"combination":"I told her that I bought a book yesterday","value":"02"  },' +
  '{"combination":"I told her yesterday that I bought a book","value":"02"  },' +
  '{"combination":"yesterday I told her that I bought a book","value":"02"  },' +
  '{"combination":"I bought a book that I told her yesterday","value":"02"  },' +
  '{"combination":"I bought a book yesterday that I told her","value":"02" 	 },' +
  '{"combination":"yesterday I bought a book that I told her","value":"02"  }  ]}';


obj = JSON.parse(text);
var flag="false"
for(var l=0;l<obj.sentence.length;l++)
{
  if(obj.sentence[l].combination==text.trim())
  {
    flag="true";
    return falg
  }
}
return flag;


}