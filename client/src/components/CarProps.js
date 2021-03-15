import styled from 'styled-components'

export default function CarProps({userData, handleChange}) {
    if (userData.car) {
        return (
            <>
            <label htmlFor="carAge">Alter des Fahrzeugs:
            <input
              type="text"
              name="carAge"
              value={userData.carAge}
              onChange={handleChange}
            />
            </label>
            <label htmlFor="carValue">Wert des Fahrzeugs:
            <input
              type="text"
              name="carValue"
              value={userData.carValue}
              onChange={handleChange}
            />
            </label>
            </>
        )
    } else {
        return ''
    }
}