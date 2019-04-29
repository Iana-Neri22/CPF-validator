describe('cpfValidator()', () => {
  it('Deveria retornar true para 40084948809', ()=> {
    if(cpfValidator(40084948809) !== true){
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    };
  });
  it('Deveria retornar false para 40084948807', ()=> {
    if(cpfValidator(40084948807) !== false){
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    };
  });
});