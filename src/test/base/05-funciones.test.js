import { getUser, getUsuarioActivo } from "../../base/05-funciones";

import '@testing-library/jest-dom';
describe('Pruebas en 05-funciones', () => {
    test('Debe de retornar un objeto',()=>{
        const userTest={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user=getUser();
        expect(user).toEqual(userTest);
    });
    test(' getUsuarioActivo Debe retornar un objeto con el argumento pasado ', () => {
        const userTest={
            uid: 'ABC567',
            username: 'JorgeAd'
        };
        const user =getUsuarioActivo('JorgeAd');
        expect(user).toEqual(userTest);
    })
    
})
