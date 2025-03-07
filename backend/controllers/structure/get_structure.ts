import async_wrapper from '../../middleware/async-wrapper';
import { get_structure_with_prefills as main_function } from '../../utils/structure/get-structure';

// Get structure
// Gets structure
const get_structure = async_wrapper(async (req, res) => {

    const ret = await main_function({...req.body});

    res.status(200).json(ret);

});

export default get_structure;
