describe('Homepage', function() {

  beforeEach(() => {
    cy.visit('./index.html')
  });

  it('Increases BPM by 5 when press up key', function() {
    cy.get('body')
    .type('{uparrow}')
    cy.get('#bpm')
    .contains('125')
  });

  it('Decreases BPM by 5 when press down key', function() {
    cy.get('body')
    .type('{downarrow}')
    cy.get('#bpm')
    .contains('115')
  });

  it('Changes the key when K is pressed', function() {
    cy.get('body')
    .type('k')
    cy.get('#key')
    .contains('Bb Aeolian')
  })

  it('Changes Wavetype when Spacebar is pressed', function() {
    cy.get('body')
    .type(' ')
    cy.get('#waveType')
    .contains('sawtooth')
  })
});
