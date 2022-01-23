import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COM, FR_Quiz, PARLIAMENT, PRESIDENT, QUIZ_FD } from './data.constant';
declare const backend: any;

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  shuffledQuestions: any;
  currentQuestion: any;
  questionNumber = 0;
  indexNumber: any = 0;
  showDesc = false;
  selectedAnswer: any;
  highlightCorrectAnswer: boolean;
  highlightIncorrectAnswer: boolean;
  clicked: boolean;
  score = 0;
  type: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.shuffledQuestions = [];
    this.activatedRoute.params.subscribe((param) => {   
    this.type=param['param']
     console.log("CURRENT TYPE",this.type); 
     this.indexNumber=0;    
     this.NextQuestion(0);
    });
  }

  NextQuestion(index?: any) {
    this.shuffledQuestions=[];
    if (this.selectedAnswer) {
      this.checkForAnswer();
      setTimeout(() => {
        this.selectedAnswer = '';
        this.showDesc = false;
        this.indexNumber++;
        this.handleQuestions();
        this.currentQuestion = this.shuffledQuestions[this.indexNumber];
        this.reset();
      }, 3000);
    } else {
      // this.indexNumber++;
      this.handleQuestions();
      this.currentQuestion = this.shuffledQuestions[this.indexNumber];
    }
  }

  handleQuestions() {  
    if(this.type=='COM'){
      this.shuffledQuestions = COM;
    }
    else if(this.type=='Parliament'){
      this.shuffledQuestions = PARLIAMENT;     
    }
    else if(this.type=='President'){
      this.shuffledQuestions = PRESIDENT;     
    }
    else if(this.type=='Quiz_FD'){
      this.shuffledQuestions = QUIZ_FD;     
    }
    else if(this.type=='FR_Quiz'){
      this.shuffledQuestions = FR_Quiz;     
    }
  }

  showDescription(selectedAnswer: string) {
    this.showDesc = true;
    this.clicked = true;
    this.selectedAnswer = selectedAnswer;
    document.getElementById('optionA').style.background = '';
    document.getElementById('optionB').style.background = '';
    document.getElementById('optionC').style.background = '';
    document.getElementById('optionD').style.background = '';
    document.getElementById(this.selectedAnswer).style.background =
      'paleturquoise';
  }

  checkForAnswer() {
    if (this.selectedAnswer === this.currentQuestion.correctOption) {
      this.score++;
      document.getElementById(this.selectedAnswer).style.background = 'green';
    }
    if (this.selectedAnswer !== this.currentQuestion.correctOption) {
      document.getElementById(this.selectedAnswer).style.background = 'red';
    }
  }

  reset() {
    document.getElementById('optionA').style.background = '';
    document.getElementById('optionB').style.background = '';
    document.getElementById('optionC').style.background = '';
    document.getElementById('optionD').style.background = '';
  }
}
