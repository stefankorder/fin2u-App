export default function PetProps({userData, handleChange}) {
    if (userData.pet) {
        return (
            <label>
              Tierart:
              <label>
                <input
                  type="radio"
                  name="petSpecies"
                  value="dog"
                  checked={userData.petSpecies === 'dog'}
                  onChange={handleChange}
                />
                Hund
              </label>
              <label>
              <input
                  type="radio"
                  name="petSpecies"
                  value="horse"
                  checked={userData.petSpecies === 'horse'}
                  onChange={handleChange}
                />
                Pferd
              </label>
            </label>
        )
    } else {
        return ''
    }
}