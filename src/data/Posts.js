import supabase from "../common/SupabaseClient";


export const getAllPosts = async () => {
    let { data: posts, error } = await supabase.from('posts').select('*');
    return{posts ,error};
}