import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';

describe('Pruebas en <PrimeraApp>', () => {
    test('debe de mostrar el mensaje "hola, soy Goku', () => {
        const saludo= 'Hola, soy Goku';
        const {getByText}= render (<PrimeraApp saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument();
        
    })
    
    
})

