interface NewContent{
    title: string
    desc: string
}


const showToast = (params: NewContent)=>{
	return params.title + params.desc;
};


showToast({
	title: '测试标题',
	desc:'测试描述'
});