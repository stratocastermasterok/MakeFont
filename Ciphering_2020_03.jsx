/*Copyright 2020 Tomilola Adewale

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ 


{
    


    function selected_rbutton (rbuttons)
    {
    for (var i = 0; i < rbuttons.children.length; i++)
    if (rbuttons.children[i].value == true)
    return i;
    }


function myScript(thisObj) {
          function myScript_buildUI(thisObj) {
                    var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Ciphering");


function myFocusFunction()
{if (this.text ===this.text) {this.text=""}
    }


function myBlurFunction()
{if (this.text ==="") {this.text=this.text}
    }

 













        var pan1_01 = myPanel.add ("panel");
        var pan1_02 = myPanel.add ("panel");
        var pan1_03 = myPanel.add ("panel");
        var pan1_04 = myPanel.add ("panel");
        
   myPanel.alignChildren = "fill";
     
pan1_01.alignChildren = "fill";
pan1_02.alignChildren = "fill";
pan1_03.alignChildren = "fill";
pan1_04.alignChildren = "fill";


var my01group = pan1_01.add ("group"); 
var bt_produce = my01group.add ("button", undefined, "Produce Cipher");



var st_myText = pan1_02.add ("statictext", undefined, "Add Your Text");
var et_myText = pan1_02.add ("edittext", [0,0,00,70], "",{multiline: true});





var st_basicSettings = pan1_03.add ("statictext", undefined, "Basic Settings");
var settings1 = pan1_03.add ("group"); 
settings1.label = "Basic Settings";


var settings1_2 = pan1_03.add ("group"); 
settings1_2.label = "Basic Settings";

var st_pxStartingPoint = settings1.add ("statictext", undefined, "pxStartingPoint");
var et_pxStartingPoint = settings1.add ("edittext", [0,0,160,20], "100,100",{multiline: false});

var st_pxColumnWidth = settings1.add ("statictext", undefined, "pxColumnWidth");
var et_pxColumnWidth = settings1.add  ("edittext", [0,0,70,20], "600",{multiline: false});
settings1.children[0].value = true;

var st_pxTracking = settings1_2.add ("statictext", undefined, "pxTracking");
var et_pxTracking = settings1_2.add ("edittext", [0,0,70,20], "10",{multiline: false});
var st_pxLeading= settings1_2.add ("statictext", undefined, "pxLeading");
var et_pxLeading = settings1_2.add ("edittext", [0,0,70,20], "100",{multiline: false});

settings1_2.children[0].value = true;




var st_advancedSettings = pan1_04.add ("statictext", undefined, "Advanced Settings");
var settings2 = pan1_04.add ("group"); 
settings2.label = "Advanced Settings";


var st_pxWordSpace = settings2.add ("statictext", undefined, "pxWordSpace");
var et_pxWordSpace = settings2.add ("edittext", [0,0,70,20], "",{multiline: false});


var st_pxTabWdith = settings2.add ("statictext", undefined, "pxTabWdith");
var et_pxTabWdith = settings2.add ("edittext", [0,0,70,20], "",{multiline: false});
settings2.children[0].value = true;







function mainScript()
{
    //alert("do cool stuff7");
//script start
{
    app.beginUndoGroup("Ma Code");









//oldstuff









var myNewText=et_myText.text;
//more
var startingPointGot =et_pxStartingPoint.text.split(",");
var startingPoint=[parseInt(startingPointGot[0]),parseInt(startingPointGot[1])];
var myFormat=[];
var columnWidthDefined=parseInt(et_pxColumnWidth.text);
var columnWidth=columnWidthDefined+startingPoint[0];
var currentX=startingPoint[0];
var currentY=startingPoint[1];
var leading=parseInt(et_pxLeading.text);
var trackingWidth=parseInt(et_pxTracking.text);

var wordSpaceWidth=20+(trackingWidth*2);
var tabWidth= wordSpaceWidth*4;
//var eachLetter=20;

if (et_pxWordSpace.text)
{
    var wordSpaceWidth=parseInt(et_pxWordSpace.text);
}

if (et_pxTabWdith.text)
{
    var tabWidth= parseInt(et_pxTabWdith.text);
}







//alert("processedText", currentX);

var dict= {

"a": [0,],
"b": [1,],
"c": [2,],
"d": [3,],
"e": [4,],
"f": [5,],
"g": [6,],
"h": [7,],
"i": [8,],
"j": [9,],
"k": [10,],
"l": [11,],
"m": [12,],
"n": [13,],
"o": [14,],
"p": [15,],
"q": [16,],
"r": [17,],
"s": [18,],
"t": [19,],
"u": [20,],
"v": [21,],
"w": [22,],
"x": [23,],
"y": [24,],
"z": [25,]

};



var myString2="s=thisLayer;\nt=time-inPoint;\ntheWidth=s.sourceRectAtTime(t,false).width;\ntheHeight=s.sourceRectAtTime(t,false).height;\n\ntheLeft=s.sourceRectAtTime(t,false).left;\ntheTop=s.sourceRectAtTime(t,false).top;\n\n[theWidth, theHeight];"

var myString3="s=thisLayer;\nt=time-inPoint;\ntheWidth=s.sourceRectAtTime(t,false).width;\ntheHeight=s.sourceRectAtTime(t,false).height;\n\ntheLeft=s.sourceRectAtTime(t,false).left;\ntheTop=s.sourceRectAtTime(t,false).top;\n\n[theLeft,theTop+theHeight];"


var myComp = app.project.activeItem;
var selectedLayers = myComp.selectedLayers;
var myOpts="abcdefghijklmnopqrstuvwxyz";
myOpts=myOpts.split("");

//fill dictionary with Widths
for (m = 0; m<selectedLayers.length; m++)
 {

selectedLayers[m].property("position").expression=myString2;
var transfer = selectedLayers[m].property("position").valueAtTime(0,false);
var myScale= (selectedLayers[m].property("scale").valueAtTime(0,true)[0])/100;



   var whatToAdd = transfer[0]*myScale;
 selectedLayers[m].property("position").expression="";
 selectedLayers[m].property("anchorPoint").expression=myString3;

   dict[myOpts[m].toString()][1]= whatToAdd;
   }

//alert(dict);



function processRecon(myLineLength2,theWord2)
{
      var myIndiChara2=theWord2.split("");
      //alert(myIndiChara2);
       
               for (cc = 0; cc<myIndiChara2.length; cc++)
                 {
                     

                           try {

                                   myLineLength2 += parseInt(dict[(myIndiChara2[cc].toString().toLowerCase())][1]) +trackingWidth;
                                   //alert(myLineLength2);

                           }
                           catch(error) {
                               //alert("error")
                               if (myIndiChara2[cc].toString().toLowerCase()=="\t")
                               {
                                   myLineLength2=startingPoint[0];
                                   myLineLength2 += tabWidth;
                                   }
                               else if (myIndiChara2[cc].toString().toLowerCase()=="\n")
                                       {
                                        myLineLength2=startingPoint[0];
                                           myLineLength2+=tabWidth;
                                           }
                                  else
                                       {
                                           }
                                       
                                       
//
                           }



                   }
                   //alert(myLineLength2);
                   //export word only
               return myLineLength2;
   
   }






function processCode(currentX,currentY,theWord)
{
//alert("insideProcessing Start");
var currentXX=currentX;
var currentYY=currentY;

      var myIndiChara=theWord.split("");
       
               for (bb = 0; bb<myIndiChara.length; bb++)
                 {
                           try {
                               
                               var myActualWidth=parseInt(dict[(myIndiChara[bb].toString().toLowerCase())][1])+trackingWidth;
                               var addThisOne=selectedLayers[parseInt(dict[(myIndiChara[bb].toString().toLowerCase())][0])].duplicate();
                               addThisOne.property("position").setValue([currentXX,currentYY]);
                               addThisOne.name=myIndiChara[bb].toString();
                               addThisOne.label=12;
                               addThisOne.moveToEnd();

             // var newTextt= myComp.layers.addText(currentPosition.toString())
             // newTextt.property("position").setValue(currentPosition);
            //  newTextt.moveToEnd();
             //alert(currentPosition);

                               //alter currentPosition
                               //currentPosition=[currentPosition[0]+ myActualWidth+trackingWidth, currentPosition[1]];
                               currentXX+=myActualWidth+trackingWidth;







                           }
                           catch(error) {
                                       if (myIndiChara[bb].toString().toLowerCase()=="\t")
                                       {
                                           myLineLength=startingPoint[0];
                                           myLineLength+=tabWidth;
                                           //added the above as a guess as to what could fix the alignment issues

                                           currentXX = startingPoint[0];
                                           currentXX+=tabWidth;
                                           }
                                      
                                        else if (myIndiChara[bb].toString().toLowerCase()=="\n")
                                       {
                                           myLineLength=startingPoint[0];
                                           myLineLength+=tabWidth;

                                           //added the above as a guess as to what could fix the alignment issues

                                           currentXX = startingPoint[0];
                                           currentXX +=tabWidth;
                                           currentYY += (leading*2);
                                           }
                                       


                                       else{

                                        
                                           }
                                       
                                       
                                       
                           }



                   }
// export just the word
//alert("executed..now pause");

               return [currentXX,currentYY];

 
   
   }






var myString=myNewText;

var myLineLength = startingPoint[0];
var currentX= startingPoint[0];
var currentY= startingPoint[1];

//alert(myLineLength);

var myWords=myString.split(" ");
//alert(myWords);


for (aa = 0; aa<myWords.length; aa++)
 {
                   //find Line length for each word added on
                 myLineLength = processRecon(myLineLength,myWords[aa]);
                 var myFigures=[];
                 
                 //alert("gotem");
                 
                   if (myLineLength<= columnWidth)
                   {
                   // alert("under"+myLineLength+" "+currentX+" "+currentY);

                       myFigures= processCode(currentX,currentY,myWords[aa]);

                       currentX = myFigures[0] + wordSpaceWidth;
                       currentY = myFigures[1];

                   }
                   else
                   {
                    //alert("over"+myLineLength+" "+currentX+" "+currentY);
                    currentX = startingPoint[0];
                    currentY = currentY+leading;

                    myFigures= processCode(currentX,currentY,myWords[aa]);

                    //get ready for next loop
                    currentX = myFigures[0] + wordSpaceWidth;
                    currentY = myFigures[1];

                   //alert("finishedish"+myLineLength+" "+currentX+" "+currentY);

                       

                   }
               
               
               //add space between words
              //var newTextt= myComp.layers.addText(currentPosition.toString())
              //newTextt.property("position").setValue(currentPosition);
             // newTextt.moveToEnd();
             //alert(currentPosition);
               currentX+= wordSpaceWidth;
               currentY=myFigures[1];
               myLineLength = currentX;
                 
                 


   }






 app.endUndoGroup();
 
 }





//script end
        }






bt_produce.onClick = mainScript;

 
 
                    //Setup panel sizing and make panel resizable
                    myPanel.layout.layout(true);
                    //myPanel.pan1.minimumSize = myPanel.pan1.size;
                    myPanel.layout.resize();
                    myPanel.onResizing = myPanel.onResize = function () {this.layout.resize();}
 
                    return myPanel;
          }
 
          
 
          var myScriptPal = myScript_buildUI(thisObj);
 
 
          if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
                    myScriptPal.center();
                    myScriptPal.show();
                    }
          }

          myScript(this);
}
 
