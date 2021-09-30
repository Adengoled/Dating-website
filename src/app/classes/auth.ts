import { EventEmitter } from '@angular/core';

export class Auth {
    // will be called every time we authenticate
    static authEmitter = new EventEmitter<boolean>();
}

