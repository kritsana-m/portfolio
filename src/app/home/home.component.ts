import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sigma: string
  sigma2: string
  command: string
  commands: any = []
  respone : string []
  command_list: any []

  constructor(private router: Router) {
    this.sigma = 'portfolio ~ #'
    this.sigma2 = '~>'
    this.command_list = [{name: 'info',detail: 'Profile Information'},{name: 'edu',detail: 'Education'},{name: 'pskill',detail: 'Programming Skill'}
    ,{name: 'exp',detail: 'Experience'},{name: 'lang',detail: 'Language'},{name: 'gpj',detail: 'Graduation Project'},{name: 'con',detail: 'Contact'}
    ,{name: 'cls',detail: 'Clear Screen'}]
   }

  ngOnInit(): void {
  }

  summit_command() {
    let text = this.command
    switch (text) {
      case 'info':
        this.respone = [`${this.sigma2} I'm Kritsana Muangwichen, Jame`,`${this.sigma2} 22-01-1998`,`${this.sigma2}  Enthusiastic to gather new knowledge`
        ,`${this.sigma2} Optimistic/positive thinking`]
        this.pushcommands(this.command,this.respone)
        break
      case 'edu':
        this.respone = [`${this.sigma2} Bachelor of Science Program`,`${this.sigma2} Computer Science,Dhonburi Rajabhat University`
        ,`${this.sigma2} Grade point average : 3.18`,`${this.sigma2}`,`${this.sigma2} Vocational Certificate of Business Administration Program`
        ,`${this.sigma2} Business Computer,Thonburi Vocational College`,`${this.sigma2} Grade point average : 3.38`]
        this.pushcommands(this.command,this.respone)
        break
      case 'pskill':
        this.respone = [`${this.sigma2} PROGRAMMING LANGUAGE`,`${this.sigma2} C#, PHP, JS, HTML`,`${this.sigma2} `
        ,`${this.sigma2} WEB STACK & TOOLS`,`${this.sigma2} Angular, Node js, Express, MySQL`]
        this.pushcommands(this.command,this.respone)
        break
      case 'exp':
        this.respone = [`${this.sigma2} 2019 : Apprentice : Faculty of Medicine Siriraj Hospital`]
        this.pushcommands(this.command,this.respone)
        break
      case 'lang':
        this.respone = [`${this.sigma2} Language Proficiency`,`${this.sigma2} Thai: Native Language`,`${this.sigma2} English: Fair`]
        this.pushcommands(this.command, this.respone)
        break
      case 'con':
        this.respone = [`${this.sigma2} E-Mail: jkrit.1998@gmail.com`]
        this.pushcommands(this.command, this.respone)
        break
      /*case 'res':
        this.respone = [`${this.sigma2} GO TO RESUME PAGE`]
        this.pushcommands(this.command, this.respone)
        const url = this.router.serializeUrl(this.router.createUrlTree(['/resume']))
        window.open(url, '_blank')
        break*/
      case 'gpj':
        this.respone = [`${this.sigma2} Graduation Project: Car-Management`,`${this.sigma2} Go to page -> https://car-management-01.herokuapp.com/`]
        this.pushcommands(this.command, this.respone)
        const url = 'https://car-management-01.herokuapp.com/'
        window.open(url, '_blank')
        break
      case 'cls':
        this.commands = []
        this.command = ''
        break
      default:
        this.respone = ['unknow command']
        this.pushcommands(this.command, this.respone)
        break
    }
  }

  focus(element: HTMLElement) {
    element.focus();
  }

  pushcommands(c :string,r: string []) {
    const respones = []
    r.forEach(e => {
      respones.push({data: e})
    });
    const obj = {
      command: c,
      respone: respones
    };
    this.commands.push(obj); 
    this.command = ''
    this.respone = []
  }

}
