import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';

export class AuthService {

  signupSuccess = new Subject();

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.signupSuccess.next(true);
        }
      )
      .catch(
        error => {
          this.signupSuccess.next(false);
          console.log(error)
        }
      );
  }

}
