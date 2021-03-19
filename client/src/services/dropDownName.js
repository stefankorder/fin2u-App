export default function getDropDownName(value, setValue) {
    if (value === 'single') {
        setValue('LEDIG')
      }
    
      if (value === 'inRelationship') {
        setValue('LEBENSGEMEINSCHAFT')
      }
    
      if (value === 'married') {
        setValue('VERHEIRATET')
      }
    
      if (value === 'divorced') {
        setValue('GESCHIEDEN')
      }
    
      if (value === 'widowed') {
        setValue('VERWITWET')
      }
      if (value === 'employed') {
        setValue('ANGESTELLT')
      }
      if (value === 'selfEmployed') {
        setValue('SELBSTSTÄNDIG')
      }
      if (value === 'civilServants') {
        setValue('VERBEAMTET')
      }
}