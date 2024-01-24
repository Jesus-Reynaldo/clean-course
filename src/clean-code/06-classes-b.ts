(()=>{
  type Gender = 'M' | 'F';
  // class Person{
  //   public name: string;
  //   public gender: Gender;
  //   public birthdate: Date;
  //   constructor(name:string,gender:Gender,birthdate: Date){
  //     this.name=name;
  //     this.gender = gender;
  //     this.birthdate = birthdate;
  //   }
  // }

    interface PersonProps{
      birthdate: Date
      gender:Gender,
      name:string,
    }

    class Person{
      public name:string;
      public gender:Gender;
      public birthdate: Date;
      constructor({name, gender, birthdate}: PersonProps){
        this.name=name;
        this.gender = gender;
        this.birthdate = new Date(birthdate);
      }
    }

    interface UserProps{
      birthdate: Date
      email: string;
      gender:Gender,
      name:string,
      role: string;
    }
    class User extends Person {
        
      public email: string;
      public lastAccess: Date;
      public role: string;

      constructor({email,role,birthdate,gender, name}:UserProps){
        super({birthdate,gender,name})
        this.lastAccess = new Date();
        this.email = email;
        this.role = role;
      }
      checkCredentials() {
          return true;
      }
  }

  interface UserSettingsProps{
    birthdate: Date
    email: string;
    gender:Gender,
    lastOpenFolder  : string;
    name:string,
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
      public workingDirectory: string;
      public lastOpenFolder  : string;
      constructor({workingDirectory, lastOpenFolder,email, birthdate, gender, name,  role}:UserSettingsProps){
        super({email, birthdate, gender, name, role});
        this.workingDirectory = workingDirectory;
        this.lastOpenFolder = lastOpenFolder;
      }
  }


  const userSettings = new UserSettings({
      birthdate: new Date('1985-10-21'),
      email: 'fernando@google.com',
      gender: 'M',
      lastOpenFolder: '/home',
      name:'Fernando',
      role: 'Admin',
      workingDirectory: '/usr/home',
});

  console.log({ userSettings });


})();