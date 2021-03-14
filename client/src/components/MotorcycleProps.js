export default function MotorcycleProps({userData, handleChange}) {
    if (userData.motorcycle) {
        return (
            <>
            <label htmlFor="motorcycleAge">Alter des Motorrads:</label>
            <input
              type="text"
              name="motorcycleAge"
              value={userData.motorcycleAge}
              onChange={handleChange}
            />
            <label htmlFor="motorcycleValue">Wert des Motorrads:</label>
            <input
              type="text"
              name="motorcycleValue"
              value={userData.motorcycleValue}
              onChange={handleChange}
            />
            </>
        )
    } else {
        return ''
    }
}