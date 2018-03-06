import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';

export class AuthService {

  signupStatus = new Subject();

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.signupStatus.next(true);
        }
      )
      .catch(
        error => {
          this.signupStatus.next(false);
          console.log(error)
        }
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => console.log(response)
      )
      .catch(
        error => console.log(error)
      );
  }

}
