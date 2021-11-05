import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string'
describe('Pruebas en el archivo 02-template-string.js',()=>{
    test('prueba en el metodo getSaludo ', () => {
        const nombre='Fernando';
        const saludo= getSaludo(nombre);
        expect(saludo).toBe('Hola '+nombre+'!');
        expect
    })
    test('getSaludo debe de retornar hola Carlos! Si no hay Argumento Nombre', () => {
        const saludo=getSaludo();
        expect(saludo).toBe('Hola Carlos!')
    })
})