class School {
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents){
      if(typeof newNumberOfStudents === 'number'){
        this._numberOfStudents = NewNumberOfStudents;
      }else{
        return 'Invalid input';
      }
      
    }
  
    quickFacts(){
      console.log(`${this._name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers){
      const randomNum = Math.floor(Math.random()*substituteTeachers.length);
      return substituteTeachers[randomNum];
    }
  }
  
  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'primary', numberOfStudents)
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  
  class Middle extends School{
    constructor(name, level, numberOfStudents){
      super(name, level, numberOfStudents)
    }
  }
  
  class HighSchool extends School{
    constructor(name, numberOfStudents,sportsTeams){
      super(name, 'high', numberOfStudents)
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
      console.log(this._sportsTeams);
    }
  }
  
  const lorraineHansbury = new HighSchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  const alSmith = new HighSchool('Al E.Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log(alSmith._sportsTeams);  