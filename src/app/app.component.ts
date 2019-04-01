import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Are two strings anagrams of each other?';
  public isAnagramMsg = '';

  isAnagram(Word1:string, Word2:string) {
    if (!Word1 || !Word2 || Word1.length !== Word2.length) return false;

    let wordArr1 = Word1.split(''), wordArr2 = Word2.split('');

    // sort the array using the array function
    let wordAlph1 = wordArr1.sort().join(),
      wordAlph2 = wordArr2.sort().join();

    // console.log(`wordAlph1: ${wordAlph1}`)
    // console.log(`wordAlph2: ${wordAlph2}`)

    // return comparison of array1 and array2
    this.isAnagramMsg = (wordAlph1 === wordAlph2) ? 'This is an Anagram!' : 'This is NOT an anagram!';
  }

}
