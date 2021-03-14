export default function CarProps({userData, handleChange}) {
    if (userData.car) {
        return (
            <>
            <label htmlFor="carAge">Alter des Fahrzeugs:</label>
            <input
              type="text"
              name="carAge"
              value={userData.carAge}
              onChange={handleChange}
            />
            <label htmlFor="carValue">Wert des Fahrzeugs:</label>
            <input
              type="text"
              name="carValue"
              value={userData.carValue}
              onChange={handleChange}
            />
            </>
        )
    } else {
        return ''
    }
}