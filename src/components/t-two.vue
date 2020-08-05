<template>
    <div>
        <div class="nav paddBac menuNav">
            <div>
                <el-input v-model="input" placeholder="请输入查询内容" size="small" ></el-input>
            </div>
            <span>
                <el-button type="primary" @click="querys" v-c-check="'view'" size="small">查询</el-button>

                <el-button type="primary" @click="cl" size="small">测试</el-button>
            </span>
        </div>
        <div class="right_tabel paddBac">
            <div class="nameNav">
                <span>查询表格</span>
                <el-button type="primary" v-c-check="'add'" size="small" icon="el-icon-plus">新增</el-button>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    :row-class-name="tableRowClassName">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="200">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small" v-c-check="'view'">查看</el-button>
                        <el-button type="text" size="small" v-c-check="'editor'">编辑</el-button>
                        <el-button type="text" size="small" v-c-check="'del'">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block" style="margin-top: 20px;display: flex;justify-content: space-between">
                <span></span>
                <div class="block">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[10, 20, 30, 40]"
                            :page-size="10"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="4">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "t-two",
        methods: {
            tableRowClassName({rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        },
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                input: ''
            }
        }
    }
</script>

<style scoped>
    .el-table >>> .warning-row {
        background: oldlace;
    }

    .el-table >>> .success-row {
        background: #f0f9eb;
    }
</style>