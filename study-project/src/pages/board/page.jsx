import React, { useState } from 'react';
import { posts } from './_data/mock';
import Pagination from './pagination';
const Modal = ({ show, onClose, title, initialContent }) => {
	const [content, setContent] = useState(initialContent);
	const [isEditing, setIsEditing] = useState(false);
	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = () => {
		setIsEditing(false);
		
	};
if (!show) return null;
return (
		<div className="pt-20 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
		<div className="bg-white w-1/2 h-4/5 p-4 relative flex flex-col">
			<button onClick={onClose} className="absolute top-2 right-2 m-2 text-2xl">
			X
			</button>

			<div className="flex-grow">
			<h2 className="pl-2 pt-6 text-2xl font-semibold text-left">{title}</h2>
			<div className="pt-2 py-2 text-left">
				<span className="pl-2 bg-gray-200 text-xs font-light px-4 py-2 rounded-3xl">#해시태그1</span>
			</div>
			<p className="border-t border-gray-300 my-4 w-full "></p>
			{isEditing ? (
				<textarea
				className="pl-2 pt-2 text-sm text-left font-light w-full h-40 resize-none"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				/>
			) : (
				<p className="pl-2 pt-2 text-sm text-left font-light">{content}</p>
			)}
			</div>

			<div className="px-60">
			{isEditing ? (
				<button
				className="px-2 py-3 bg-kwRed text-white font-bold focus:outline-none rounded-lg w-full"
				onClick={handleSaveClick}
				>
				저장하기
				</button>
			) : (
				<button
				className="px-2 py-3 bg-kwRed text-white font-bold focus:outline-none rounded-lg w-full"
				onClick={handleEditClick}
				>
				글 수정하기
				</button>
			)}
			</div>
		</div>
		</div>
	);
	};

const Post = ({ title, content, author, onPostClick, postData }) => (
	<div onClick={() => onPostClick(postData)}>
		<p className="text-xl font-semibold text-left">{title}</p>
		<p className="pt-2 text-sm text-left font-light">{content}</p>
		<div className="pt-2 flex justify-between items-center">
		<button className="bg-gray-300 text-black px-1.5 py-1.5 rounded-md text-xs">{author}</button>
		<div>
			<button className="pt-2 text-sm font-normal hover:underline pr-1">수정</button>
			<button className="pt-2 text-sm font-normal hover:underline">삭제</button>
		</div>
		</div>
		<p className="border-t border-gray-300 my-4 w-full pb-3"></p>
	</div>
);

export default function BoardPage() {

	const [modalShow, setModalShow] = useState(false);
	const [selectedPost, setSelectedPost] = useState(null);
	const openModal = (postData) => {
		setModalShow(true);
		setSelectedPost(postData);
	};

	const closeModal = () => {
		setModalShow(false);
		setSelectedPost(null);
	};

	const [currentPage, setCurrentPage] = useState(1);
	
	const postsPerPage = 4;
	const post_empty = [
		{
			title: 'write me',
			content: 'write me',
			author: 'write me',
		}
	]
	
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	
	return (
		
		<div className="flex flex-col items-center justify-center ">
			<div className="bg-backgroundGrey w-full">
			<div className=" flex flex-col flex-grow mx-auto w-2/5">
				<p className="pt-32 text-3xl font-medium text-center">자유 게시판</p>
				<p className="pt-2 text-sm text-center  font-light">자유로운 고민과 연구를 홍보할 수 있어요</p>
				<button>{/*onclick 구현해야함 */}
					<div className='pt-6 flex items-center'>
						<img src="/public/search.png" style={{ width: '15px', height: '15px' }} />
						<p className=" text-xs font-light ml-2">제목으로 검색하기</p>
					</div>
				</button>
				
				
				<p className="border-t border-kwRed my-4 w-full"></p>
				
				{currentPosts.map((post, index) => (
					<div key={index}>
					<Post
						title={post.title}
						content={post.content}
						author={post.author}
						onPostClick={openModal}
						postData={post}
					/>
					</div>
				))}
				{selectedPost && (
					<Modal
					show={modalShow}
					onClose={closeModal}
					title={selectedPost.title}
					content={selectedPost.content}
					/>
				)}

				

				<Pagination
					currentPage={currentPage}
					postsPerPage={postsPerPage}
					totalPosts={posts.length}
					paginate={paginate}
				/>
				<div className="pt-5 pb-5 flex justify-center items-center">
				
					<button style={{ width: '160px', height: '50px' }} 
					className=" bg-kwRed text-white font-bold flex justify-center items-center focus:outline-none rounded-3xl"
					onClick={openModal}
					title={post_empty.title}
					content={post_empty.content}
					author={post_empty.author}>
						<div className="pr-3">
							<img src="/public/write.png" style={{ width: '20px', height: 'auto' }} />
						</div>
						<p className="text-white text-sm font-semibold">글 작성하기</p>
					</button>

				</div>
			</div>
			</div>
    	</div>
	);
}
