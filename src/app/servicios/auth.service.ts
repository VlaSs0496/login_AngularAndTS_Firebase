import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { GithubAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async register(email: string, password: string){
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("error en el registro parce", error);
      return null;
    }
  }

  async login(email: string, password: string){
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("error en el logeo papa", error);
      return null;
    }
  }
  async loginWithgithub(email: string, password: string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GithubAuthProvider)
    }catch (error) {
      console.log("error en el logeo de mark?", error);
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
    } catch (error) {
      console.log("error en el logeo de mark?", error);
      return null;
    }
  }  async loginWithFB(email: string, password: string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
    } catch (error) {
      console.log("error en el logeo de mark?", error);
      return null;
    }
  }
  getUserLogin(){
    return this.afauth.authState;
  }
  logout(){
    this.afauth.signOut();
  }

}
