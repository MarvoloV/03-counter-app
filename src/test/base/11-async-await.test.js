import { getImagen } from "../../base/11-async-await"

describe('Pruebas con Async-await y fetch', () => {
    test('Debe retorna el url de la imagen', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    })
    
})
