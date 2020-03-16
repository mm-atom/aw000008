import { expect } from 'chai';
import a from '../dist/index';

const mm = { data: { local: { key: '665' } } }
describe('fd-aw000007', async () => {
	it('aw7', async () => {
		const value = a(mm, 'key');
		expect(value).eq('665')
	});
});
