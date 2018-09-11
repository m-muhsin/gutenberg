/**
 * Internal dependencies
 */

import { removeFormat } from '../remove-format';
import { getSparseArrayLength } from './helpers';

describe( 'removeFormat', () => {
	const strong = { type: 'strong' };
	const em = { type: 'em' };

	it( 'should remove format', () => {
		const record = {
			formats: [ , , , [ strong ], [ em, strong ], [ em, strong ], [ em ], , , , , , , ],
			text: 'one two three',
		};
		const expected = {
			formats: [ , , , , [ em ], [ em ], [ em ], , , , , , , ],
			text: 'one two three',
		};
		const actual = removeFormat( record, 'strong', 3, 6 );

		expect( actual ).toEqual( expected );
		expect( getSparseArrayLength( actual.formats ) ).toBe( 3 );
	} );

	it( 'should remove format for collased selection', () => {
		const record = {
			formats: [ , , , [ strong ], [ em, strong ], [ em, strong ], [ em ], , , , , , , ],
			text: 'one two three',
		};
		const expected = {
			formats: [ , , , , [ em ], [ em ], [ em ], , , , , , , ],
			text: 'one two three',
		};
		const actual = removeFormat( record, 'strong', 4, 4 );

		expect( actual ).toEqual( expected );
		expect( getSparseArrayLength( actual.formats ) ).toBe( 3 );
	} );
} );