import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx'
import ScoreBox from './quiz/ScoreBox.jsx'
import Results from './quiz/Results.jsx'


export default class App extends Component{
    
    constructor(){
        super();
        this.state={
            questions: [
				{
					id: 1,
					text: 'What is the capital of India?',
					choices: [
						{
							id: 'a',
							text: 'Kolkata'
						},
						{
							id: 'b',
							text: 'New Delhi'
						},
						{
							id: 'c',
							text: 'Mumbai'
						}
					],
					correct: 'b'
				},
				{
					id: 2,
					text: 'Who owns microsoft?',
					choices: [
						{
							id: 'a',
							text: 'Mark'
						},
						{
							id: 'b',
							text: 'Elon'
						},
						{
							id: 'c',
							text: 'Bill'
						}
					],
					correct: 'c'
				},
				{
					id: 3,
					text: 'What is the capital of USA',
					choices: [
						{
							id: 'a',
							text: 'Washington DC'
						},
						{
							id: 'b',
							text: 'New York'
						},
						{
							id: 'c',
							text: 'Boston'
						}
					],
					correct: 'a'
				},
				{
					id: 4,
					text: 'Who is the president of India',
					choices: [
						{
							id: 'a',
							text: 'Narendra Modi'
						},
						{
							id: 'b',
							text: 'L K Adwani'
						},
						{
							id: 'c',
							text: 'R N Kovind'
						}
					],
					correct: 'c'
				}
			],
			score: 0,
			current: 1
        }
    }

    setScore(score){
       this.setState({score});
    }

    setCurrent(current){
        this.setState({current});
    }

    
    render(){
		if(this.state.current > this.state.questions.length){
		   var scorebox="";
		   var result=<Results {...this.state}/>;
	      }
	    else{
			  var scorebox=<ScoreBox {...this.state} />;
			  var result='';
	       }
        return (<div>
                 {scorebox}
                 <QuestionList {...this.state} setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)} />
                 {result}
				</div>)
    }
}
