import * as columns from '../../../shared/columns';

export default (threadCounts) => [
	columns.EditButton('Edit Character'),
	columns.ToggleHiatusButton(),
	columns.DeleteButton('Untrack Character'),
	columns.CharacterName(),
	columns.UrlIdentifier(),
	columns.PlatformId(),
	columns.IsOnHiatus(),
	columns.ThreadCount(threadCounts)
];
